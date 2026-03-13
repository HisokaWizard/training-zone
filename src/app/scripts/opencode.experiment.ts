import axios, { AxiosInstance } from 'axios';

// ─── Типы ───────────────────────────────────────────────────────────────────

/**
 * Параметры для создания сессии OpenCode.
 */
interface CreateSessionParams {
  /** URL запущенного сервера OpenCode (например http://localhost:7788) */
  serverUrl: string;
  /** ID агента: "build", "plan" или кастомный */
  agent: string;
  /** Модель в формате "provider/model", например "anthropic/claude-sonnet-4-20250514" */
  model: string;
  /** Абсолютный путь к директории (репозиторию), в контексте которой будет работать агент */
  directory: string;
  /** Заголовок сессии (опционально) */
  title?: string;
}

interface Session {
  id: string;
  projectID: string;
  directory: string;
  title: string;
  version: string;
  time: {
    created: number;
    updated: number;
  };
}

interface AssistantMessage {
  id: string;
  sessionID: string;
  role: 'assistant';
  modelID: string;
  providerID: string;
  cost: number;
  tokens: {
    input: number;
    output: number;
    reasoning: number;
  };
}

interface PromptResponse {
  info: AssistantMessage;
  parts: Array<{
    type: string;
    text?: string;
    [key: string]: unknown;
  }>;
}

interface SessionResult {
  sessionId: string;
  title: string;
  response: PromptResponse;
}

interface Agent {
  name: string;
  description?: string;
  mode: 'subagent' | 'primary' | 'all';
  builtIn: boolean;
}

// ─── Утилиты ────────────────────────────────────────────────────────────────

/**
 * Разбирает строку модели формата "provider/model" на providerID и modelID.
 */
function parseModel(model: string): { providerID: string; modelID: string } {
  const slashIndex = model.indexOf('/');
  if (slashIndex === -1) {
    throw new Error(
      `Неверный формат модели: "${model}". Ожидается "provider/model", например "anthropic/claude-sonnet-4-20250514"`,
    );
  }
  return {
    providerID: model.substring(0, slashIndex),
    modelID: model.substring(slashIndex + 1),
  };
}

/**
 * Создаёт axios-клиент для OpenCode сервера.
 */
function createClient(serverUrl: string): AxiosInstance {
  return axios.create({
    baseURL: serverUrl,
    headers: { 'Content-Type': 'application/json' },
  });
}

// ─── Основные функции ───────────────────────────────────────────────────────

/**
 * Получает список доступных агентов с сервера.
 */
async function listAgents(serverUrl: string): Promise<Agent[]> {
  const client = createClient(serverUrl);
  const { data } = await client.get<Agent[]>('/agent');
  return data;
}

/**
 * Проверяет здоровье сервера OpenCode.
 */
async function healthCheck(serverUrl: string): Promise<{ healthy: boolean; version: string }> {
  const client = createClient(serverUrl);
  const { data } = await client.get('/global/health');
  return data;
}

/**
 * Создаёт сессию OpenCode в контексте указанной директории.
 *
 * @returns объект сессии с id, title и другими полями
 */
async function createSession(
  serverUrl: string,
  directory: string,
  title?: string,
): Promise<Session> {
  const client = createClient(serverUrl);
  const { data } = await client.post<Session>(
    '/session',
    { title: title || 'New session' },
    { params: { directory } },
  );
  return data;
}

/**
 * Отправляет промпт в существующую сессию с указанием агента и модели.
 *
 * @param serverUrl  URL сервера OpenCode
 * @param sessionId  ID сессии
 * @param prompt     Текст промпта
 * @param agent      ID агента ("build", "plan", кастомный)
 * @param model      Модель "provider/modelID"
 * @param directory  Рабочая директория
 */
async function sendPrompt(
  serverUrl: string,
  sessionId: string,
  prompt: string,
  agent: string,
  model: string,
  directory: string,
): Promise<PromptResponse> {
  const client = createClient(serverUrl);
  const { providerID, modelID } = parseModel(model);

  const { data } = await client.post<PromptResponse>(
    `/session/${sessionId}/message`,
    {
      agent,
      model: { providerID, modelID },
      parts: [{ type: 'text', text: prompt }],
    },
    { params: { directory } },
  );
  return data;
}

/**
 * Создаёт сессию OpenCode с выбранным агентом и моделью в контексте указанной
 * директории, отправляет промпт и возвращает результат.
 *
 * Предполагается, что сервер OpenCode уже запущен:
 *   opencode serve --port 7788
 *
 * @example
 * ```ts
 * const result = await createSessionWithPrompt(
 *   {
 *     serverUrl: "http://localhost:7788",
 *     agent: "build",
 *     model: "anthropic/claude-sonnet-4-20250514",
 *     directory: "/Users/me/my-project",
 *     title: "Рефакторинг модуля авторизации",
 *   },
 *   "Объясни структуру проекта"
 * );
 * ```
 */
async function createSessionWithPrompt(
  params: CreateSessionParams,
  prompt: string,
): Promise<SessionResult> {
  const { serverUrl, agent, model, directory, title } = params;

  // 1. Проверяем доступность сервера
  const health = await healthCheck(serverUrl);
  console.log(`Сервер доступен, версия: ${health.version}`);

  // 2. Получаем список агентов и валидируем
  const agents = await listAgents(serverUrl);
  const agentNames = agents.map((a) => a.name);
  console.log(`Доступные агенты: [${agentNames.join(', ')}]`);

  if (!agentNames.includes(agent)) {
    throw new Error(
      `Агент "${agent}" не найден на сервере. Доступные: [${agentNames.join(', ')}].\n` +
        `Убедитесь что:\n` +
        `  1. Сервер запущен из директории с opencode.json\n` +
        `  2. Сервер перезапущен после изменения opencode.json`,
    );
  }

  // 3. Создаём сессию в контексте нужной директории
  const session = await createSession(serverUrl, directory, title || `${agent} / ${model}`);
  console.log(`Сессия создана: ${session.id}`);

  // 4. Отправляем промпт с агентом и моделью
  const response = await sendPrompt(serverUrl, session.id, prompt, agent, model, directory);
  console.log(`Ответ получен от агента "${agent}" (модель: ${model})`);

  return {
    sessionId: session.id,
    title: session.title,
    response,
  };
}

// ─── CLI-запуск ─────────────────────────────────────────────────────────────

async function main() {
  const serverUrl = 'http://localhost:7788';
  const agent = 'plan';
  const model = 'opencode/minimax-m2.5-free';
  const directory = '/Users/hisokawizard/Projects/documents_hub';
  const input_data = JSON.stringify({
    libFeName: 'clients-lib-fe',
    analystPRLink: 'https://github.com/HisokaWizard/somnia_relay_viewer/pull/1',
    jiraTask: 'DMBSDR-4444',
  });
  const prompt = `Твоя задача склонировать сервис по следующей линке https://github.com/HisokaWizard/{libFeName}.git, получить diff из ПРа {analystPRLink} и бизнес постановку задачи {jiraTask}. Твои входные данные ${input_data} - сопоставь ключи верно и приступай к работе!`;

  console.log(`Сервер:     ${serverUrl}`);
  console.log(`Агент:      ${agent}`);
  console.log(`Модель:     ${model}`);
  console.log(`Директория: ${directory}`);
  console.log(`Промпт:     ${prompt}`);
  console.log('─'.repeat(60));

  try {
    const result = await createSessionWithPrompt({ serverUrl, agent, model, directory }, prompt);

    console.log('\nРезультат:');
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    const err = error as any;
    if (err.response) {
      console.error(`HTTP ${err.response.status}:`, JSON.stringify(err.response.data, null, 2));
    } else {
      console.error('Ошибка:', err.message || error);
    }
    process.exit(1);
  }
}

main();

export {
  createSession,
  createSessionWithPrompt,
  sendPrompt,
  listAgents,
  healthCheck,
  parseModel,
  createClient,
};
export type { CreateSessionParams, SessionResult, Session, PromptResponse, Agent };
