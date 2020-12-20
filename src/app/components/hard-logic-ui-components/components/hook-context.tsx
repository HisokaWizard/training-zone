import React from 'react';
import { useAlert } from './alert/alertContext';

export const HookContext = () => {
  const {show} = useAlert();

  return (
    <>
      <h1>Component with context</h1>
      <button className='btn btn-primary' onClick={show}>Show alert</button>
    </>
  )
};