import React, { useEffect } from 'react';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAction, switchColorAction } from './actions';
import { GeneralState } from './store';
import { GlobalStoreState } from './globalRedux/globalStoreState';

export const GeneralRedux = () => {
  const generalState: GeneralState = useSelector((state: GlobalStoreState) => state.general);

  useEffect(() => {
    dispatch(getTodosAction());
  }, [])

  const dispatch = useDispatch();

  const randomColorGen = () => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
  }

  const switcherBackground = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(switchColorAction(randomColorGen()));
  }

  return (
    <div style={{ height: '100%', padding: '10px', backgroundColor: generalState.colorRandom }}>
      <div>General redux!!!</div>
      <Button variant='outlined' color='primary' style={{ margin: '10px 0' }} onClick={switcherBackground}>
        Click to change background color!
      </Button>
      <>
        {generalState.todos?.map(todo => {
          return <Card key={todo.id}>
            <CardContent>
              <Grid container spacing={2} style={{backgroundColor: randomColorGen()}}>
                <Grid item xs={3} sm={3}>UserID: {todo.userId}</Grid>
                <Grid item xs={3} sm={3}>ID: {todo.id}</Grid>
                <Grid item xs={3} sm={3}>Title: {todo.title}</Grid>
                <Grid item xs={3} sm={3}>Completed: {todo.completed}</Grid>
              </Grid>
            </CardContent>
          </Card>
        })}
      </>
    </div>
  )
}