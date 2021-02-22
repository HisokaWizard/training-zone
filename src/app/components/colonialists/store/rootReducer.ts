import { combineReducers } from '@reduxjs/toolkit';
import { gameReducers } from './general/reducers';

export const rootReducer = combineReducers({
  general: gameReducers,
})

export type RootState = ReturnType<typeof rootReducer>