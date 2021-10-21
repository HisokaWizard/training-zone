import { MapPositions } from './card';
import { CardNode } from './node';

export interface Edge {
  cardNodeKeyPair: string[];
  cardIds: MapPositions[];
}