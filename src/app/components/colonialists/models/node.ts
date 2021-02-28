import { Edge } from './edge';

export enum SpecialEffects {
  profitableExchange = '3to1',
  twoTreeToAny = '2treeTo1',
  twoClayToAny = '2slayTo1',
  twoSheepToAny = '2sheepTo1',
  twoStoneToAny = '2stoneTo1',
  twoWheatToAny = '2wheatTo1',
  none = 'none',
}

export interface CardNode {
  edgeList: Edge[];
  name: string;
  key: string;
  cardIds: string[];
  busy: boolean;
  specialEffect: SpecialEffects;
}

export interface CardNodeKeyPair {
  nodeKeyOne: string;
  nodeKeyTwo: string;
}