import { GeneralActionTypes, IBaseActionCreator } from '../actions';
import { GeneralState, initialGeneralState } from '../store';

export const generalReducer = (
  state: GeneralState = initialGeneralState, actions: IBaseActionCreator<GeneralActionTypes, any>
): GeneralState => {
  switch (actions.type) {
    case GeneralActionTypes.SWITCH_COLOR:
      return { ...state, colorRandom: actions.payload };
    case GeneralActionTypes.SET_TODOS:
      return { ...state, todos: actions.payload };
    case GeneralActionTypes.SET_ANY_ERROR:
      return { ...state, todos: actions.payload };
    case GeneralActionTypes.GET_TODOS:
      return { ...state };
    default:
      return state;
  }
} 