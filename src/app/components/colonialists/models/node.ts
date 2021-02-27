import { Edge } from './edge';

export interface CardNode {
  edgeList: Edge[];
  name: string;
  key: string;
  cardIds: string[];
  busy: boolean;
}

export interface CardNodeKeyPair {
  nodeKeyOne: string;
  nodeKeyTwo: string;
}