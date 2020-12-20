import React from 'react';
import { useAlert } from './alertContext';

export const Alert = () => {
  const alert = useAlert();

  if (!alert.visible) return null;
  
  return (
    <>
      <div className='alert alert-danger' onClick={alert.hide}>
        Too important message!!
        <h2>{alert.text}</h2>
      </div>
    </>
  )
};