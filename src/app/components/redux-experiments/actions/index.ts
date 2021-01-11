export interface IBaseActionCreator<T, P> {
  type: T;
  payload: P;
}

export enum GeneralActionTypes {
  SWITCH_COLOR = 'SWITCH_COLOR',
}

export const switchColorAction = (color: string): IBaseActionCreator<GeneralActionTypes, string> => {
  return {
    type: GeneralActionTypes.SWITCH_COLOR,
    payload: color
  }
}