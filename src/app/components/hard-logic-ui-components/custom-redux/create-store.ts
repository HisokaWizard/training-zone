export const createStore = (rootReducer: any, initialState: any) => {
  let state = rootReducer(initialState, {type: '__INIT__'});
  const subscribers: any[] = [];

  return {
    dispatch: (action: {type: string; payload?: any}) => {
      state = rootReducer(state, action);
      subscribers.forEach((sub: any) => sub());
    },
    subscribe: (callback: any) => {
      subscribers.push(callback);
    },
    getState: () => {
      return state;
    },
    getSubscribers: () => {
      return subscribers;
    } 
  };
};