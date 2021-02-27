import { Edge } from './edge';
import { CardTypes } from './map';
import { CardNode } from './node';

export interface Card {
  id: string;
  edges: Edge[];
  nodes: CardNode[];
  value: number;
  type: CardTypes;
}