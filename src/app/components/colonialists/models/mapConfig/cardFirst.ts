import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardFirst: Edge = {
  cardIds: [MapPositions.first],
  cardNodeKeyPair: [],
}
const edgeSecondCardFirst: Edge = {
  cardIds: [MapPositions.first, MapPositions.second],
  cardNodeKeyPair: [],
}
const edgeThirdCardFirst: Edge = {
  cardIds: [MapPositions.first, MapPositions.thirteenth],
  cardNodeKeyPair: [],
}
const edgeFourthCardFirst: Edge = {
  cardIds: [MapPositions.first, MapPositions.twelfth],
  cardNodeKeyPair: [],
}
const edgeFifthCardFirst: Edge = {
  cardIds: [MapPositions.first],
  cardNodeKeyPair: [],
}
const edgeSixthCardFirst: Edge = {
  cardIds: [MapPositions.first],
  cardNodeKeyPair: [],
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

edgeFirstCardFirst.cardNodeKeyPair = [nodeFirstCardFirst.key, nodeSecondCardFirst.key];
edgeSecondCardFirst.cardNodeKeyPair = [nodeSecondCardFirst.key, nodeThirdCardFirst.key];
edgeThirdCardFirst.cardNodeKeyPair = [nodeThirdCardFirst.key, nodeFourthCardFirst.key];
edgeFourthCardFirst.cardNodeKeyPair = [nodeFourthCardFirst.key, nodeFifthCardFirst.key];
edgeFifthCardFirst.cardNodeKeyPair = [nodeFifthCardFirst.key, nodeSixthCardFirst.key];
edgeSixthCardFirst.cardNodeKeyPair = [nodeSixthCardFirst.key, nodeFirstCardFirst.key];

export const firstCard: Card = {
  id: MapPositions.first,
  row: CardRows.first,
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