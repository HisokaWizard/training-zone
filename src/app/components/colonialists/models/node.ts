import { MapPositions } from './card';
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

export enum NodeNames {
  top = 'top',
  topRight = 'topRight',
  bottomRight = 'bottomRight',
  bottom = 'bottom',
  bottomLeft = 'bottomLeft',
  topLeft = 'topLeft',
}

export interface CardNode {
  edgeList: Edge[];
  key: string;
  cardIds: MapPositions[];
  busy: boolean;
  specialEffect: SpecialEffects;
}