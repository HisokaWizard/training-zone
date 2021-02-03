import { Todos } from '../api/someAsyncAPI';

export interface IBaseActionCreator<T, P> {
  type: T;
  payload?: P;
}

export enum GeneralActionTypes {
  SWITCH_COLOR = 'SWITCH_COLOR',
  SET_TODOS = 'SET_TODOS',
  SET_ANY_ERROR = 'SET_ANY_ERROR',
  GET_TODOS = 'GET_TODOS',
}

export const switchColorAction = (color: string): IBaseActionCreator<GeneralActionTypes, string> => {
  return { type: GeneralActionTypes.SWITCH_COLOR, payload: color };
}

export const getTodosAction = (): IBaseActionCreator<GeneralActionTypes, undefined> => {
  return { type: GeneralActionTypes.GET_TODOS };
}

export const setTodosAction = (todos: Todos[]): IBaseActionCreator<GeneralActionTypes, Todos[]> => {
  return { type: GeneralActionTypes.SET_TODOS, payload: todos };
}

export const setAnyErrorAction = (error: Error): IBaseActionCreator<GeneralActionTypes, Error> => {
  return { type: GeneralActionTypes.SET_ANY_ERROR, payload: error };
}