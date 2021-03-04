import { Card, CardNames, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardSecond: Edge = {
  cardIds: [MapPositions.second],
  cardNodePair: [],
}
const edgeSecondCardSecond: Edge = {
  cardIds: [MapPositions.second, MapPositions.third],
  cardNodePair: [],
}
const edgeThirdCardSecond: Edge = {
  cardIds: [MapPositions.second, MapPositions.fourteenth],
  cardNodePair: [],
}
const edgeFourthCardSecond: Edge = {
  cardIds: [MapPositions.second, MapPositions.thirteenth],
  cardNodePair: [],
}
const edgeFifthCardSecond: Edge = {
  cardIds: [MapPositions.second, MapPositions.first],
  cardNodePair: [],
}
const edgeSixthCardSecond: Edge = {
  cardIds: [MapPositions.second],
  cardNodePair: [],
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

edgeFirstCardSecond.cardNodePair = [nodeFirstCardSecond, nodeSecondCardSecond];
edgeSecondCardSecond.cardNodePair = [nodeSecondCardSecond, nodeThirdCardSecond];
edgeThirdCardSecond.cardNodePair = [nodeThirdCardSecond, nodeFourthCardSecond];
edgeFourthCardSecond.cardNodePair = [nodeFourthCardSecond, nodeFifthCardSecond];
edgeFifthCardSecond.cardNodePair = [nodeFifthCardSecond, nodeSixthCardSecond];
edgeSixthCardSecond.cardNodePair = [nodeSixthCardSecond, nodeFirstCardSecond];

export const secondCard: Card = {
  id: MapPositions.second,
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