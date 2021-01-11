import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { mixReducer } from './globalReducers';

const composeEnhancers = (window as any).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
  return createStore(
    mixReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}