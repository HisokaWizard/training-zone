import { combineReducers } from 'redux';
import { generalReducer } from '../reducer';

export const mixReducer = combineReducers({
  general: generalReducer,
});