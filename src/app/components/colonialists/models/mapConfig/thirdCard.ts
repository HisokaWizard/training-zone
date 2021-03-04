import { Card, CardNames, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardThird: Edge = {
  cardIds: [MapPositions.third],
  cardNodePair: [],
}
const edgeSecondCardThird: Edge = {
  cardIds: [MapPositions.third],
  cardNodePair: [],
}
const edgeThirdCardThird: Edge = {
  cardIds: [MapPositions.third, MapPositions.fourth],
  cardNodePair: [],
}
const edgeFourthCardThird: Edge = {
  cardIds: [MapPositions.third, MapPositions.fourteenth],
  cardNodePair: [],
}
const edgeFifthCardThird: Edge = {
  cardIds: [MapPositions.third, MapPositions.second],
  cardNodePair: [],
}
const edgeSixthCardThird: Edge = {
  cardIds: [MapPositions.third],
  cardNodePair: [],
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

edgeFirstCardThird.cardNodePair = [nodeFirstCardThird, nodeSecondCardThird];
edgeSecondCardThird.cardNodePair = [nodeSecondCardThird, nodeThirdCardThird];
edgeThirdCardThird.cardNodePair = [nodeThirdCardThird, nodeFourthCardThird];
edgeFourthCardThird.cardNodePair = [nodeFourthCardThird, nodeFifthCardThird];
edgeFifthCardThird.cardNodePair = [nodeFifthCardThird, nodeSixthCardThird];
edgeSixthCardThird.cardNodePair = [nodeSixthCardThird, nodeFirstCardThird];

export const thirdCard: Card = {
  id: MapPositions.third,
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