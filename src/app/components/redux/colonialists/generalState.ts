import { GameMap } from '@gameModels/map';

export interface GameState {
  dropCubeResult: number;
  gameMap: GameMap;
}

export const initialGameState: GameState = {
  dropCubeResult: 0,
  gameMap: undefined,
}