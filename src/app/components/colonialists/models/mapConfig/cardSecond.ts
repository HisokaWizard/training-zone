import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardSecond: Edge = {
  cardIds: [MapPositions.second],
  cardNodeKeyPair: [],
}
const edgeSecondCardSecond: Edge = {
  cardIds: [MapPositions.second, MapPositions.third],
  cardNodeKeyPair: [],
}
const edgeThirdCardSecond: Edge = {
  cardIds: [MapPositions.second, MapPositions.fourteenth],
  cardNodeKeyPair: [],
}
const edgeFourthCardSecond: Edge = {
  cardIds: [MapPositions.second, MapPositions.thirteenth],
  cardNodeKeyPair: [],
}
const edgeFifthCardSecond: Edge = {
  cardIds: [MapPositions.second, MapPositions.first],
  cardNodeKeyPair: [],
}
const edgeSixthCardSecond: Edge = {
  cardIds: [MapPositions.second],
  cardNodeKeyPair: [],
}

const secondCardNodeKey = (nodeName: NodeNames) => `${CardNames.secondCard}_${nodeName}_${MapPositions.second}`

const nodeFirstCardSecond: CardNode = {
  cardIds: [MapPositions.second],
  key: secondCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeFirstCardSecond, edgeSixthCardSecond]
}

const nodeSecondCardSecond: CardNode = {
  cardIds: [MapPositions.second, MapPositions.third],
  key: secondCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardSecond, edgeSecondCardSecond]
}

const nodeThirdCardSecond: CardNode = {
  cardIds: [MapPositions.second, MapPositions.third, MapPositions.fourteenth],
  key: secondCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardSecond, edgeThirdCardSecond]
}

const nodeFourthCardSecond: CardNode = {
  cardIds: [MapPositions.second, MapPositions.thirteenth, MapPositions.fourteenth],
  key: secondCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardSecond, edgeFourthCardSecond]
}

const nodeFifthCardSecond: CardNode = {
  cardIds: [MapPositions.second, MapPositions.first, MapPositions.thirteenth],
  key: secondCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardSecond, edgeFifthCardSecond]
}

const nodeSixthCardSecond: CardNode = {
  cardIds: [MapPositions.second, MapPositions.first],
  key: secondCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeFourthCardSecond, edgeFifthCardSecond]
}

edgeFirstCardSecond.cardNodeKeyPair = [nodeFirstCardSecond.key, nodeSecondCardSecond.key];
edgeSecondCardSecond.cardNodeKeyPair = [nodeSecondCardSecond.key, nodeThirdCardSecond.key];
edgeThirdCardSecond.cardNodeKeyPair = [nodeThirdCardSecond.key, nodeFourthCardSecond.key];
edgeFourthCardSecond.cardNodeKeyPair = [nodeFourthCardSecond.key, nodeFifthCardSecond.key];
edgeFifthCardSecond.cardNodeKeyPair = [nodeFifthCardSecond.key, nodeSixthCardSecond.key];
edgeSixthCardSecond.cardNodeKeyPair = [nodeSixthCardSecond.key, nodeFirstCardSecond.key];

export const secondCard: Card = {
  id: MapPositions.second,
  row: CardRows.first,
  edges: [
    edgeFirstCardSecond,
    edgeSecondCardSecond,
    edgeThirdCardSecond,
    edgeFourthCardSecond,
    edgeFifthCardSecond,
    edgeSixthCardSecond,
  ],
  nodes: [
    nodeFirstCardSecond,
    nodeSecondCardSecond,
    nodeThirdCardSecond,
    nodeFourthCardSecond,
    nodeFifthCardSecond,
    nodeSixthCardSecond,
  ],
  value: 0,
  type: undefined,
}