import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardThird: Edge = {
  cardIds: [MapPositions.third],
  cardNodeKeyPair: [],
}
const edgeSecondCardThird: Edge = {
  cardIds: [MapPositions.third],
  cardNodeKeyPair: [],
}
const edgeThirdCardThird: Edge = {
  cardIds: [MapPositions.third, MapPositions.fourth],
  cardNodeKeyPair: [],
}
const edgeFourthCardThird: Edge = {
  cardIds: [MapPositions.third, MapPositions.fourteenth],
  cardNodeKeyPair: [],
}
const edgeFifthCardThird: Edge = {
  cardIds: [MapPositions.third, MapPositions.second],
  cardNodeKeyPair: [],
}
const edgeSixthCardThird: Edge = {
  cardIds: [MapPositions.third],
  cardNodeKeyPair: [],
}

const thirdCardNodeKey = (nodeName: NodeNames) => `${CardNames.thirdCard}_${nodeName}_${MapPositions.third}`

const nodeFirstCardThird: CardNode = {
  cardIds: [MapPositions.third],
  key: thirdCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeFirstCardThird, edgeSixthCardThird]
}

const nodeSecondCardThird: CardNode = {
  cardIds: [MapPositions.third],
  key: thirdCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeFirstCardThird, edgeSecondCardThird]
}

const nodeThirdCardThird: CardNode = {
  cardIds: [MapPositions.third, MapPositions.fourth],
  key: thirdCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardThird, edgeThirdCardThird]
}

const nodeFourthCardThird: CardNode = {
  cardIds: [MapPositions.third, MapPositions.fourth, MapPositions.fourteenth],
  key: thirdCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardThird, edgeFourthCardThird]
}

const nodeFifthCardThird: CardNode = {
  cardIds: [MapPositions.third, MapPositions.second, MapPositions.fourteenth],
  key: thirdCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardThird, edgeFifthCardThird]
}

const nodeSixthCardThird: CardNode = {
  cardIds: [MapPositions.third, MapPositions.second],
  key: thirdCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardThird, edgeFifthCardThird]
}

edgeFirstCardThird.cardNodeKeyPair = [nodeFirstCardThird.key, nodeSecondCardThird.key];
edgeSecondCardThird.cardNodeKeyPair = [nodeSecondCardThird.key, nodeThirdCardThird.key];
edgeThirdCardThird.cardNodeKeyPair = [nodeThirdCardThird.key, nodeFourthCardThird.key];
edgeFourthCardThird.cardNodeKeyPair = [nodeFourthCardThird.key, nodeFifthCardThird.key];
edgeFifthCardThird.cardNodeKeyPair = [nodeFifthCardThird.key, nodeSixthCardThird.key];
edgeSixthCardThird.cardNodeKeyPair = [nodeSixthCardThird.key, nodeFirstCardThird.key];

export const thirdCard: Card = {
  id: MapPositions.third,
  row: CardRows.first,
  edges: [
    edgeFirstCardThird,
    edgeSecondCardThird,
    edgeThirdCardThird,
    edgeFourthCardThird,
    edgeFifthCardThird,
    edgeSixthCardThird,
  ],
  nodes: [
    nodeFirstCardThird,
    nodeSecondCardThird,
    nodeThirdCardThird,
    nodeFourthCardThird,
    nodeFifthCardThird,
    nodeSixthCardThird,
  ],
  value: 0,
  type: undefined,
}