import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardFifteenth: Edge = {
  cardIds: [MapPositions.fifteenth, MapPositions.fourth],
  cardNodeKeyPair: [],
}
const edgeSecondCardFifteenth: Edge = {
  cardIds: [MapPositions.fifteenth, MapPositions.fifth],
  cardNodeKeyPair: [],
}
const edgeThirdCardFifteenth: Edge = {
  cardIds: [MapPositions.fifteenth, MapPositions.sixth],
  cardNodeKeyPair: [],
}
const edgeFourthCardFifteenth: Edge = {
  cardIds: [MapPositions.fifteenth, MapPositions.sixteenth],
  cardNodeKeyPair: [],
}
const edgeFifthCardFifteenth: Edge = {
  cardIds: [MapPositions.fifteenth, MapPositions.nineteenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardFifteenth: Edge = {
  cardIds: [MapPositions.fifteenth, MapPositions.fourteenth],
  cardNodeKeyPair: [],
}

const fifteenthCardNodeKey = (nodeName: NodeNames) => `${CardNames.fifteenthCard}_${nodeName}_${MapPositions.fifteenth}`

const nodeFirstCardFifteenth: CardNode = {
  cardIds: [MapPositions.fifteenth, MapPositions.fourth, MapPositions.fourteenth],
  key: fifteenthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardFifteenth, edgeSixthCardFifteenth]
}

const nodeSecondCardFifteenth: CardNode = {
  cardIds: [MapPositions.fifteenth, MapPositions.fourth, MapPositions.fifth],
  key: fifteenthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardFifteenth, edgeSecondCardFifteenth]
}

const nodeThirdCardFifteenth: CardNode = {
  cardIds: [MapPositions.fifteenth, MapPositions.fifth, MapPositions.sixth],
  key: fifteenthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardFifteenth, edgeThirdCardFifteenth]
}

const nodeFourthCardFifteenth: CardNode = {
  cardIds: [MapPositions.fifteenth, MapPositions.sixth, MapPositions.sixteenth],
  key: fifteenthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardFifteenth, edgeFourthCardFifteenth]
}

const nodeFifthCardFifteenth: CardNode = {
  cardIds: [MapPositions.fifteenth, MapPositions.sixteenth, MapPositions.nineteenth],
  key: fifteenthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardFifteenth, edgeFifthCardFifteenth]
}

const nodeSixthCardFifteenth: CardNode = {
  cardIds: [MapPositions.fifteenth, MapPositions.fourteenth, MapPositions.nineteenth],
  key: fifteenthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardFifteenth, edgeFifthCardFifteenth]
}

edgeFirstCardFifteenth.cardNodeKeyPair = [nodeFirstCardFifteenth.key, nodeSecondCardFifteenth.key];
edgeSecondCardFifteenth.cardNodeKeyPair = [nodeSecondCardFifteenth.key, nodeThirdCardFifteenth.key];
edgeThirdCardFifteenth.cardNodeKeyPair = [nodeThirdCardFifteenth.key, nodeFourthCardFifteenth.key];
edgeFourthCardFifteenth.cardNodeKeyPair = [nodeFourthCardFifteenth.key, nodeFifthCardFifteenth.key];
edgeFifthCardFifteenth.cardNodeKeyPair = [nodeFifthCardFifteenth.key, nodeSixthCardFifteenth.key];
edgeSixthCardFifteenth.cardNodeKeyPair = [nodeSixthCardFifteenth.key, nodeFirstCardFifteenth.key];

export const fifteenthCard: Card = {
  id: MapPositions.fifteenth,
  row: CardRows.third,
  edges: [
    edgeFirstCardFifteenth,
    edgeSecondCardFifteenth,
    edgeThirdCardFifteenth,
    edgeFourthCardFifteenth,
    edgeFifthCardFifteenth,
    edgeSixthCardFifteenth,
  ],
  nodes: [
    nodeFirstCardFifteenth,
    nodeSecondCardFifteenth,
    nodeThirdCardFifteenth,
    nodeFourthCardFifteenth,
    nodeFifthCardFifteenth,
    nodeSixthCardFifteenth,
  ],
  value: 0,
  type: undefined,
}