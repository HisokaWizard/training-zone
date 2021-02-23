import { Edge } from './edge';

export interface Node {
  edgeList: Edge[];
  name: string;
  key: string;
}

export interface NodeKeyPair {
  nodeKeyOne: string;
  nodeKeyTwo: string;
}