import { Grid, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useGameState } from './store/general/hooks';
import { dropCube } from './store/general/reducers';
import { useAppDispatch } from './store/hooks';

export const ColonialistsGame = () => {
  const dispatch = useAppDispatch();
  const {
    dropCubeResult,
  } = useGameState();

  const dropCubes = () => {
    dispatch(dropCube());
  }

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography component='h4' variant='h4'>Colonialists Game</Typography>
    </Grid>
    <Grid item xs={6}>
    <Button color='primary' variant='outlined' onClick={dropCubes}>Drop cubes and get result</Button>
    </Grid>
    <Grid item xs={6}>
      Your result is {dropCubeResult}
    </Grid>
  </Grid>
}