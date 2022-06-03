export const createSharedEvent = (key: string, opt?: CustomEventInit<unknown>) => {
  const event = new CustomEvent(key, opt);
  return event;
};

export const handlerSharedEvent = (key: string, data: unknown) => {
  const event = createSharedEvent('pupaData', { bubbles: true, detail: data });
  window.dispatchEvent(event);
};
