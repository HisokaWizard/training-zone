import { MapPositions } from './card';
import { CardNode } from './node';

export interface Edge {
  cardNodePair: CardNode[];
  cardIds: MapPositions[];
}