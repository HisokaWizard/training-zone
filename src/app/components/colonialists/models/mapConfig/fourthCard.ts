import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardFourth: Edge = {
  cardIds: [MapPositions.fourth],
  cardNodeKeyPair: [],
}
const edgeSecondCardFourth: Edge = {
  cardIds: [MapPositions.fourth],
  cardNodeKeyPair: [],
}
const edgeThirdCardFourth: Edge = {
  cardIds: [MapPositions.fourth, MapPositions.fifth],
  cardNodeKeyPair: [],
}
const edgeFourthCardFourth: Edge = {
  cardIds: [MapPositions.fourth, MapPositions.fifteenth],
  cardNodeKeyPair: [],
}
const edgeFifthCardFourth: Edge = {
  cardIds: [MapPositions.fourth, MapPositions.fourteenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardFourth: Edge = {
  cardIds: [MapPositions.fourth, MapPositions.third],
  cardNodeKeyPair: [],
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

edgeFirstCardFourth.cardNodeKeyPair = [nodeFirstCardFourth.key, nodeSecondCardFourth.key];
edgeSecondCardFourth.cardNodeKeyPair = [nodeSecondCardFourth.key, nodeThirdCardFourth.key];
edgeThirdCardFourth.cardNodeKeyPair = [nodeThirdCardFourth.key, nodeFourthCardFourth.key];
edgeFourthCardFourth.cardNodeKeyPair = [nodeFourthCardFourth.key, nodeFifthCardFourth.key];
edgeFifthCardFourth.cardNodeKeyPair = [nodeFifthCardFourth.key, nodeSixthCardFourth.key];
edgeSixthCardFourth.cardNodeKeyPair = [nodeSixthCardFourth.key, nodeFirstCardFourth.key];

export const fourthCard: Card = {
  id: MapPositions.fourth,
  row: CardRows.second,
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