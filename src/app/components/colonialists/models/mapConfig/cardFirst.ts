import { Card, CardNames, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardFirst: Edge = {
  cardIds: [MapPositions.first],
  cardNodePair: [],
}
const edgeSecondCardFirst: Edge = {
  cardIds: [MapPositions.first, MapPositions.second],
  cardNodePair: [],
}
const edgeThirdCardFirst: Edge = {
  cardIds: [MapPositions.first, MapPositions.thirteenth],
  cardNodePair: [],
}
const edgeFourthCardFirst: Edge = {
  cardIds: [MapPositions.first, MapPositions.twelfth],
  cardNodePair: [],
}
const edgeFifthCardFirst: Edge = {
  cardIds: [MapPositions.first],
  cardNodePair: [],
}
const edgeSixthCardFirst: Edge = {
  cardIds: [MapPositions.first],
  cardNodePair: [],
}

const firstCardNodeKey = (nodeName: NodeNames) => `${CardNames.firstCard}_${nodeName}_${MapPositions.first}`

const nodeFirstCardFirst: CardNode = {
  cardIds: [MapPositions.first],
  key: firstCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardFirst, edgeSixthCardFirst]
}

const nodeSecondCardFirst: CardNode = {
  cardIds: [MapPositions.first, MapPositions.second],
  key: firstCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeFirstCardFirst, edgeSecondCardFirst]
}

const nodeThirdCardFirst: CardNode = {
  cardIds: [MapPositions.first, MapPositions.second, MapPositions.thirteenth],
  key: firstCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardFirst, edgeThirdCardFirst]
}

const nodeFourthCardFirst: CardNode = {
  cardIds: [MapPositions.first, MapPositions.thirteenth, MapPositions.twelfth],
  key: firstCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardFirst, edgeFourthCardFirst]
}

const nodeFifthCardFirst: CardNode = {
  cardIds: [MapPositions.first, MapPositions.twelfth],
  key: firstCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.twoSheepToAny,
  edgeList: [edgeFourthCardFirst, edgeFifthCardFirst]
}

const nodeSixthCardFirst: CardNode = {
  cardIds: [MapPositions.first],
  key: firstCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardFirst, edgeFifthCardFirst]
}

edgeFirstCardFirst.cardNodePair = [nodeFirstCardFirst, nodeSecondCardFirst];
edgeSecondCardFirst.cardNodePair = [nodeSecondCardFirst, nodeThirdCardFirst];
edgeThirdCardFirst.cardNodePair = [nodeThirdCardFirst, nodeFourthCardFirst];
edgeFourthCardFirst.cardNodePair = [nodeFourthCardFirst, nodeFifthCardFirst];
edgeFifthCardFirst.cardNodePair = [nodeFifthCardFirst, nodeSixthCardFirst];
edgeSixthCardFirst.cardNodePair = [nodeSixthCardFirst, nodeFirstCardFirst];

export const firstCard: Card = {
  id: MapPositions.first,
  edges: [
    edgeFirstCardFirst,
    edgeSecondCardFirst,
    edgeThirdCardFirst,
    edgeFourthCardFirst,
    edgeFifthCardFirst,
    edgeSixthCardFirst,
  ],
  nodes: [
    nodeFirstCardFirst,
    nodeSecondCardFirst,
    nodeThirdCardFirst,
    nodeFourthCardFirst,
    nodeFifthCardFirst,
    nodeSixthCardFirst,
  ],
  value: 0,
  type: undefined,
}