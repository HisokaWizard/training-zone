import { Edge } from './edge';
import { CardNode } from './node';
import { Resource } from './resources';

export interface Road {
  playerId: string;
  edge: Edge[];
  built: boolean;
  price: Resource[];
}

export interface Village {
  playerId: string;
  node: CardNode[];
  built: boolean;
  price: Resource[];
  score: number;
}

export interface City extends Village {}