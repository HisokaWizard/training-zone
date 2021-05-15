import { combineReducers } from '@reduxjs/toolkit';
import {gameReducers} from "@/redux/colonialists/reducers";
import {filterReducer} from "@/redux/filterExperiments/reducer";

export const rootReducer = combineReducers({
  general: gameReducers,
  filterEmployee: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>