import { Resource } from './resources';

export interface Player {
  id: string;
  scores: number;
  resources: Resource[];
  
}