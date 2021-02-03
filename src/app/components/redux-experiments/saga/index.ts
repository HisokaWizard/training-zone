import { call, put, takeEvery } from 'redux-saga/effects';
import { GeneralActionTypes, IBaseActionCreator, setAnyErrorAction, setTodosAction } from '../actions';
import { getTodos, Todos } from '../api/someAsyncAPI';

export function* fetchTodos(action: IBaseActionCreator<GeneralActionTypes, Todos[]>) {
  try {
    const todos: Todos[] = yield call(getTodos as any, action.payload);
    yield put(setTodosAction(todos));
  } catch (error) {
    yield put(setAnyErrorAction(error));
  }
}

export function* mySaga() {
  yield takeEvery(GeneralActionTypes.GET_TODOS, fetchTodos);
}