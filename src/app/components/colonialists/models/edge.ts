import { CardNodeKeyPair } from './node';

export interface Edge {
  cardNodeKeyPairs: CardNodeKeyPair[];
  cardIds: string[];
}