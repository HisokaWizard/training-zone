import { Edge } from './edge';
import { Node } from './node';

export interface Graph {
  nodes: Node[];
  edges: Edge[];
}