import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { switchColorAction } from './actions';
import { GeneralState } from './store';
import { GlobalStoreState } from './globalRedux/globalStoreState';

export const GeneralRedux = () => {
  const generalState: GeneralState = useSelector((state: GlobalStoreState) => state.general);
  const dispatch = useDispatch();

  const switcherBackground = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    dispatch(switchColorAction(`rgb(${red},${green},${blue})`));
  }

  return (
    <div style={{height: '100vh', padding: '10px', backgroundColor: generalState.colorRandom}}>
      <div>General redux!!!</div>
      <Button variant='outlined' color='primary' style={{margin: '10px 0'}} onClick={switcherBackground}>
        Click to change background color!
      </Button>
    </div>
  )
}