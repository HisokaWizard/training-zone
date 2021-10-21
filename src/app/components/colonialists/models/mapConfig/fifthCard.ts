import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardFifth: Edge = {
  cardIds: [MapPositions.fifth],
  cardNodeKeyPair: [],
}
const edgeSecondCardFifth: Edge = {
  cardIds: [MapPositions.fifth],
  cardNodeKeyPair: [],
}
const edgeThirdCardFifth: Edge = {
  cardIds: [MapPositions.fifth],
  cardNodeKeyPair: [],
}
const edgeFourthCardFifth: Edge = {
  cardIds: [MapPositions.fifth, MapPositions.sixth],
  cardNodeKeyPair: [],
}
const edgeFifthCardFifth: Edge = {
  cardIds: [MapPositions.fifth, MapPositions.fifteenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardFifth: Edge = {
  cardIds: [MapPositions.fifth, MapPositions.fourth],
  cardNodeKeyPair: [],
}

const fifthCardNodeKey = (nodeName: NodeNames) => `${CardNames.fifthCard}_${nodeName}_${MapPositions.fifth}`

const nodeFirstCardFifth: CardNode = {
  cardIds: [MapPositions.fifth, MapPositions.fourth],
  key: fifthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.twoClayToAny,
  edgeList: [edgeFirstCardFifth, edgeSixthCardFifth]
}

const nodeSecondCardFifth: CardNode = {
  cardIds: [MapPositions.fifth],
  key: fifthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardFifth, edgeSecondCardFifth]
}

const nodeThirdCardFifth: CardNode = {
  cardIds: [MapPositions.fifth],
  key: fifthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardFifth, edgeThirdCardFifth]
}

const nodeFourthCardFifth: CardNode = {
  cardIds: [MapPositions.fifth, MapPositions.sixth],
  key: fifthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.twoTreeToAny,
  edgeList: [edgeThirdCardFifth, edgeFourthCardFifth]
}

const nodeFifthCardFifth: CardNode = {
  cardIds: [MapPositions.fifth, MapPositions.sixth, MapPositions.fifteenth],
  key: fifthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardFifth, edgeFifthCardFifth]
}

const nodeSixthCardFifth: CardNode = {
  cardIds: [MapPositions.fifth, MapPositions.fourth, MapPositions.fifteenth],
  key: fifthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardFifth, edgeFifthCardFifth]
}

edgeFirstCardFifth.cardNodeKeyPair = [nodeFirstCardFifth.key, nodeSecondCardFifth.key];
edgeSecondCardFifth.cardNodeKeyPair = [nodeSecondCardFifth.key, nodeThirdCardFifth.key];
edgeThirdCardFifth.cardNodeKeyPair = [nodeThirdCardFifth.key, nodeFourthCardFifth.key];
edgeFourthCardFifth.cardNodeKeyPair = [nodeFourthCardFifth.key, nodeFifthCardFifth.key];
edgeFifthCardFifth.cardNodeKeyPair = [nodeFifthCardFifth.key, nodeSixthCardFifth.key];
edgeSixthCardFifth.cardNodeKeyPair = [nodeSixthCardFifth.key, nodeFirstCardFifth.key];

export const fifthCard: Card = {
  id: MapPositions.fifth,
  row: CardRows.third,
  edges: [
    edgeFirstCardFifth,
    edgeSecondCardFifth,
    edgeThirdCardFifth,
    edgeFourthCardFifth,
    edgeFifthCardFifth,
    edgeSixthCardFifth,
  ],
  nodes: [
    nodeFirstCardFifth,
    nodeSecondCardFifth,
    nodeThirdCardFifth,
    nodeFourthCardFifth,
    nodeFifthCardFifth,
    nodeSixthCardFifth,
  ],
  value: 0,
  type: undefined,
}