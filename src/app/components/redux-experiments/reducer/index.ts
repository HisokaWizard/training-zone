import { GeneralActionTypes, IBaseActionCreator } from '../actions';
import { GeneralState, initialGeneralState } from '../store';

export const generalReducer = (
  state: GeneralState = initialGeneralState, actions: IBaseActionCreator<GeneralActionTypes, any>
): GeneralState => {
  switch (actions.type) {
    case GeneralActionTypes.SWITCH_COLOR:
      return {...state, colorRandom: actions.payload};
    default:
      return state;
  }
} 