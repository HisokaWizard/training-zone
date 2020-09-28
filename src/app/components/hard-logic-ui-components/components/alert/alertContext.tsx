import React, { useContext, useReducer } from 'react';

interface AlertPropviderProps {
  children: any;
}

interface AlertContextModel {
  visible: boolean;
  text: string;
  show: () => void;
  hide: () => void;
}

const defaultContext: AlertContextModel = {
  visible: false,
  text: '',
  show: () => {},
  hide: () => {},
};

const SHOW_ALERT = 'show';
const HIDE_ALERT = 'hide';

const AlertContext = React.createContext(defaultContext);
export const useAlert = () => {
  return useContext(AlertContext);
}

const reducer = (state: AlertContextModel, action: {type: string, payload: string}) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, visible: true, text: action.payload};
    case HIDE_ALERT:
      return {...state, visible: false};
    default:
      return state;
  }
}

export const AlertProvider = ({children}: AlertPropviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  const show = () => dispatch({type: SHOW_ALERT, payload: 'My name is Petr'});
  const hide = () => dispatch({type: HIDE_ALERT, payload: ''});
  
  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      text: state.text,
      show,
      hide,
    }}>
      {children}
    </AlertContext.Provider>
  )
}