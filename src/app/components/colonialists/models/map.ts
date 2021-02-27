import { Card } from './card';

export enum CardTypes {
  tree = 1,
  stone = 2,
  sheep = 3,
  clay = 4,
  wheat = 5,
  bandit = 6,
}

export const cardsLimit = {
  [CardTypes.bandit]: 1,
  [CardTypes.stone]: 3,
  [CardTypes.clay]: 3,
  [CardTypes.sheep]: 4,
  [CardTypes.tree]: 4,
  [CardTypes.wheat]: 4,
}

export const MAP_SIZE = cardsLimit[CardTypes.bandit]
  + cardsLimit[CardTypes.stone]
  + cardsLimit[CardTypes.clay]
  + cardsLimit[CardTypes.sheep]
  + cardsLimit[CardTypes.tree]
  + cardsLimit[CardTypes.wheat];

export interface GameMap {
  cards: Card[];
}