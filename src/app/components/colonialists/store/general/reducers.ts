import { createSlice } from '@reduxjs/toolkit'
import { randomTwoCubesDropper } from './businessFunctions';
import { initialGameState } from './store'

const gameState = createSlice({
  name: 'colonialists',
  initialState: initialGameState,
  reducers: {
    dropCube: state => { state.dropCubeResult = randomTwoCubesDropper() }
  }
})

export const gameReducers = gameState.reducer;
export const { dropCube } = gameState.actions;