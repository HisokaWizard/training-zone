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

export enum MapValues {
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
  eight = 8,
  nine = 9,
  ten = 10,
  eleven = 11,
  twelve = 12,
  bandit = 7,
}

export const mapValuesLimit = {
  [MapValues.two]: 1,
  [MapValues.three]: 2,
  [MapValues.four]: 2,
  [MapValues.five]: 2,
  [MapValues.six]: 2,
  [MapValues.eight]: 2,
  [MapValues.nine]: 2,
  [MapValues.ten]: 2,
  [MapValues.eleven]: 2,
  [MapValues.twelve]: 1,
  [MapValues.bandit]: 1,
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