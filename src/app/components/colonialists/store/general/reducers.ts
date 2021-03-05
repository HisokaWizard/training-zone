import { GameMap } from '@/colonialists/models/map';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { randomTwoCubesDropper } from './businessFunctions';
import { initialGameState } from './generalState'

const gameState = createSlice({
  name: 'colonialists',
  initialState: initialGameState,
  reducers: {
    dropCube: state => { state.dropCubeResult = randomTwoCubesDropper() },
    generateMap: (state, action: PayloadAction<GameMap>) => {
      state.gameMap = action.payload;
    },
  }
})

export const gameReducers = gameState.reducer;
export const { dropCube, generateMap } = gameState.actions;