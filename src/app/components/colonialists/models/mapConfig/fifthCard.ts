import { Card, CardNames, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardFifth: Edge = {
  cardIds: [MapPositions.fifth],
  cardNodePair: [],
}
const edgeSecondCardFifth: Edge = {
  cardIds: [MapPositions.fifth],
  cardNodePair: [],
}
const edgeThirdCardFifth: Edge = {
  cardIds: [MapPositions.fifth],
  cardNodePair: [],
}
const edgeFourthCardFifth: Edge = {
  cardIds: [MapPositions.fifth, MapPositions.sixth],
  cardNodePair: [],
}
const edgeFifthCardFifth: Edge = {
  cardIds: [MapPositions.fifth, MapPositions.fifteenth],
  cardNodePair: [],
}
const edgeSixthCardFifth: Edge = {
  cardIds: [MapPositions.fifth, MapPositions.fourth],
  cardNodePair: [],
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

edgeFirstCardFifth.cardNodePair = [nodeFirstCardFifth, nodeSecondCardFifth];
edgeSecondCardFifth.cardNodePair = [nodeSecondCardFifth, nodeThirdCardFifth];
edgeThirdCardFifth.cardNodePair = [nodeThirdCardFifth, nodeFourthCardFifth];
edgeFourthCardFifth.cardNodePair = [nodeFourthCardFifth, nodeFifthCardFifth];
edgeFifthCardFifth.cardNodePair = [nodeFifthCardFifth, nodeSixthCardFifth];
edgeSixthCardFifth.cardNodePair = [nodeSixthCardFifth, nodeFirstCardFifth];

export const fifthCard: Card = {
  id: MapPositions.fifth,
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