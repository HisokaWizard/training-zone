import { Card, CardNames, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardFourth: Edge = {
  cardIds: [MapPositions.fourth],
  cardNodePair: [],
}
const edgeSecondCardFourth: Edge = {
  cardIds: [MapPositions.fourth],
  cardNodePair: [],
}
const edgeThirdCardFourth: Edge = {
  cardIds: [MapPositions.fourth, MapPositions.fifth],
  cardNodePair: [],
}
const edgeFourthCardFourth: Edge = {
  cardIds: [MapPositions.fourth, MapPositions.fifteenth],
  cardNodePair: [],
}
const edgeFifthCardFourth: Edge = {
  cardIds: [MapPositions.fourth, MapPositions.fourteenth],
  cardNodePair: [],
}
const edgeSixthCardFourth: Edge = {
  cardIds: [MapPositions.fourth, MapPositions.third],
  cardNodePair: [],
}

const fourthCardNodeKey = (nodeName: NodeNames) => `${CardNames.fourthCard}_${nodeName}_${MapPositions.fourth}`

const nodeFirstCardFourth: CardNode = {
  cardIds: [MapPositions.fourth, MapPositions.third],
  key: fourthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardFourth, edgeSixthCardFourth]
}

const nodeSecondCardFourth: CardNode = {
  cardIds: [MapPositions.fourth],
  key: fourthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.twoClayToAny,
  edgeList: [edgeFirstCardFourth, edgeSecondCardFourth]
}

const nodeThirdCardFourth: CardNode = {
  cardIds: [MapPositions.fourth, MapPositions.fifth],
  key: fourthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.twoClayToAny,
  edgeList: [edgeSecondCardFourth, edgeThirdCardFourth]
}

const nodeFourthCardFourth: CardNode = {
  cardIds: [MapPositions.fourth, MapPositions.fifth, MapPositions.fifteenth],
  key: fourthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardFourth, edgeFourthCardFourth]
}

const nodeFifthCardFourth: CardNode = {
  cardIds: [MapPositions.fourth, MapPositions.fourteenth, MapPositions.fifteenth],
  key: fourthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardFourth, edgeFifthCardFourth]
}

const nodeSixthCardFourth: CardNode = {
  cardIds: [MapPositions.fourth, MapPositions.third, MapPositions.fourteenth],
  key: fourthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardFourth, edgeFifthCardFourth]
}

edgeFirstCardFourth.cardNodePair = [nodeFirstCardFourth, nodeSecondCardFourth];
edgeSecondCardFourth.cardNodePair = [nodeSecondCardFourth, nodeThirdCardFourth];
edgeThirdCardFourth.cardNodePair = [nodeThirdCardFourth, nodeFourthCardFourth];
edgeFourthCardFourth.cardNodePair = [nodeFourthCardFourth, nodeFifthCardFourth];
edgeFifthCardFourth.cardNodePair = [nodeFifthCardFourth, nodeSixthCardFourth];
edgeSixthCardFourth.cardNodePair = [nodeSixthCardFourth, nodeFirstCardFourth];

export const fourthCard: Card = {
  id: MapPositions.fourth,
  edges: [
    edgeFirstCardFourth,
    edgeSecondCardFourth,
    edgeThirdCardFourth,
    edgeFourthCardFourth,
    edgeFifthCardFourth,
    edgeSixthCardFourth,
  ],
  nodes: [
    nodeFirstCardFourth,
    nodeSecondCardFourth,
    nodeThirdCardFourth,
    nodeFourthCardFourth,
    nodeFifthCardFourth,
    nodeSixthCardFourth,
  ],
  value: 0,
  type: undefined,
}