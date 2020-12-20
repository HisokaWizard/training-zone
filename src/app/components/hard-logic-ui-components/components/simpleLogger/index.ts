export interface LoggerItem {
  method?: string;
  file?: string;
  message?: string;
  warning?: string;
  error?: string;
}

export class SimpleLogger {
  private instanse: SimpleLogger;
  private exists = false;
  private loggerList: LoggerItem[] = [];

  private constructor() {
  }

  public createLogger() {
    if (!this.exists) {
      this.exists = true;
      return this.instanse = new SimpleLogger();
    }
    return this.instanse;
  }

  public addLogItem(logItem: LoggerItem) {
    this.loggerList.push(logItem);
  }

  public getLogList() {
    return this.loggerList;
  }

  public clearLog() {
    this.loggerList = [];
  }
}

export class MiddleLogger {
  private static exists = false;
  private loggerList: LoggerItem[] = [];
  private static instanse: MiddleLogger;

  constructor() {
    if (!MiddleLogger.exists) {
      MiddleLogger.exists = true;
      return MiddleLogger.instanse = this;
    }
    return MiddleLogger.instanse;
  }

  public addLogItem(logItem: LoggerItem) {
    this.loggerList.push(logItem);
  }

  public getLogList() {
    return this.loggerList;
  }

  public clearLog() {
    this.loggerList = [];
  }
}