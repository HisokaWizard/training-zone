import { AnyAction } from "redux";
import { ActionType } from "../../../blog-data-store/reducer";
import { INCREMENT, DECREMENT, HIDE_BUTTONS } from "./constants";
import { CounterState } from "./rootReducer";

export function increment(integer: number) {
  return {
    type: INCREMENT,
    payload: integer,
  }
}

export function decrement(integer: number) {
  return {
    type: DECREMENT,
    payload: integer,
  }
}

export function hideBtn(hide: boolean) {
  return {
    type: HIDE_BUTTONS,
    payload: hide,
  }
}

export function asyncIncrement(state: CounterState) {
  (dispatch: (action: any) => void) => {
    dispatch(hideBtn(state.hide));
    setTimeout(() => {
      dispatch(increment(state.value));
      dispatch(hideBtn(state.hide));
    }, 5000);
  }
  return {type: INCREMENT};
}