import { Todos } from '../api/someAsyncAPI';

export interface GeneralState {
  colorRandom: string;
  todos: Todos[];
  error: Error;
}

export const initialGeneralState: GeneralState = {
  colorRandom: 'rgb(255,255,255)',
  todos: [],
  error: new Error(),
}