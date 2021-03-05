import { GameMap } from '@/colonialists/models/map';

export interface GameState {
  dropCubeResult: number;
  gameMap: GameMap;
}

export const initialGameState: GameState = {
  dropCubeResult: 0,
  gameMap: undefined,
}