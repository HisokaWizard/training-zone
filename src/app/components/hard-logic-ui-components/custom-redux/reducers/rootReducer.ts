import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, HIDE_BUTTONS } from "./constants";

interface ActionType {
  type: string;
  payload?: any;
}

export interface CounterState {
  value: number;
  hide: boolean;
}

const initialState = {
  value: 0,
  hide: false,
};

export const counterReducer = (state: CounterState = initialState, action: ActionType) => {
  switch(action.type) {
    case INCREMENT:
      return {...state, value: state.value + action.payload};
    case DECREMENT:
      return {...state, value: state.value - action.payload};
    case HIDE_BUTTONS:
      return {...state, hide: !state.hide};
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer
});