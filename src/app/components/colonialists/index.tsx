import { Grid, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import React from 'react';
import {Card, CardRows, CardTypes} from './models/card';
import {useAppDispatch} from "@/redux/hooks";
import {useGameState} from "@/redux/colonialists/hooks";
import {mapGenerator} from "@/redux/colonialists/businessFunctions";
import { generateMap, dropCube } from '@/redux/colonialists/reducers';

export const ColonialistsGame = () => {
  const dispatch = useAppDispatch();
  const {
    dropCubeResult,
    gameMap,
  } = useGameState();

  const dropCubes = () => {
    dispatch(dropCube());
  }

  const updateMap = () => {
    const newMap = mapGenerator();
    dispatch(generateMap(newMap));
  }

  const getBackgroundColor = (cardType: CardTypes): string => {
    return cardType === CardTypes.tree
      ? 'darkGreen'
      : cardType === CardTypes.clay
        ? 'brown'
        : cardType === CardTypes.wheat
          ? 'yellow'
          : cardType === CardTypes.sheep
            ? 'lightgreen'
            : cardType === CardTypes.stone
              ? 'silver'
              : 'red';
  }

  const renderOneRow = (row: CardRows) => {
    return <Grid item xs={12}>
      <Grid container spacing={2} justify='center'>
        {gameMap?.cards?.map((card: Card) => (
          row === card.row &&
          <Grid item xs='auto' key={card.id}>
            <Button style={{ borderRadius: '100%', backgroundColor: getBackgroundColor(card.type), padding: '20px' }} >
              {card.value}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  }

  const renderMap = () => {
    return <Grid container spacing={2} direction='column'>
      {renderOneRow(CardRows.first)}
      {renderOneRow(CardRows.second)}
      {renderOneRow(CardRows.third)}
      {renderOneRow(CardRows.fourth)}
      {renderOneRow(CardRows.fifth)}
    </Grid>
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
    <Grid item xs={6}>
      <Button color='primary' variant='outlined' onClick={updateMap}>Generate new map</Button>
    </Grid>
    <Grid item xs={12}>
      {renderMap()}
    </Grid>
  </Grid>
}