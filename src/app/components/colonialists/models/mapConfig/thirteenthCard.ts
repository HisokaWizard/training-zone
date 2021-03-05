import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardThirteenth: Edge = {
  cardIds: [MapPositions.thirteenth, MapPositions.first],
  cardNodeKeyPair: [],
}
const edgeSecondCardThirteenth: Edge = {
  cardIds: [MapPositions.thirteenth, MapPositions.second],
  cardNodeKeyPair: [],
}
const edgeThirdCardThirteenth: Edge = {
  cardIds: [MapPositions.thirteenth, MapPositions.fourteenth],
  cardNodeKeyPair: [],
}
const edgeFourthCardThirteenth: Edge = {
  cardIds: [MapPositions.thirteenth, MapPositions.nineteenth],
  cardNodeKeyPair: [],
}
const edgeFifthCardThirteenth: Edge = {
  cardIds: [MapPositions.thirteenth, MapPositions.eighteenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardThirteenth: Edge = {
  cardIds: [MapPositions.thirteenth, MapPositions.twelfth],
  cardNodeKeyPair: [],
}

const thirteenthCardNodeKey = (nodeName: NodeNames) => `${CardNames.thirteenthCard}_${nodeName}_${MapPositions.thirteenth}`

const nodeFirstCardThirteenth: CardNode = {
  cardIds: [MapPositions.thirteenth, MapPositions.first, MapPositions.second],
  key: thirteenthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardThirteenth, edgeSixthCardThirteenth]
}

const nodeSecondCardThirteenth: CardNode = {
  cardIds: [MapPositions.thirteenth, MapPositions.second, MapPositions.fourteenth],
  key: thirteenthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardThirteenth, edgeSecondCardThirteenth]
}

const nodeThirdCardThirteenth: CardNode = {
  cardIds: [MapPositions.thirteenth, MapPositions.fourteenth, MapPositions.nineteenth],
  key: thirteenthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardThirteenth, edgeThirdCardThirteenth]
}

const nodeFourthCardThirteenth: CardNode = {
  cardIds: [MapPositions.thirteenth, MapPositions.eighteenth, MapPositions.nineteenth],
  key: thirteenthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardThirteenth, edgeFourthCardThirteenth]
}

const nodeFifthCardThirteenth: CardNode = {
  cardIds: [MapPositions.thirteenth, MapPositions.twelfth, MapPositions.eighteenth],
  key: thirteenthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardThirteenth, edgeFifthCardThirteenth]
}

const nodeSixthCardThirteenth: CardNode = {
  cardIds: [MapPositions.thirteenth, MapPositions.first, MapPositions.twelfth],
  key: thirteenthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardThirteenth, edgeFifthCardThirteenth]
}

edgeFirstCardThirteenth.cardNodeKeyPair = [nodeFirstCardThirteenth.key, nodeSecondCardThirteenth.key];
edgeSecondCardThirteenth.cardNodeKeyPair = [nodeSecondCardThirteenth.key, nodeThirdCardThirteenth.key];
edgeThirdCardThirteenth.cardNodeKeyPair = [nodeThirdCardThirteenth.key, nodeFourthCardThirteenth.key];
edgeFourthCardThirteenth.cardNodeKeyPair = [nodeFourthCardThirteenth.key, nodeFifthCardThirteenth.key];
edgeFifthCardThirteenth.cardNodeKeyPair = [nodeFifthCardThirteenth.key, nodeSixthCardThirteenth.key];
edgeSixthCardThirteenth.cardNodeKeyPair = [nodeSixthCardThirteenth.key, nodeFirstCardThirteenth.key];

export const thirteenthCard: Card = {
  id: MapPositions.thirteenth,
  row: CardRows.second,
  edges: [
    edgeFirstCardThirteenth,
    edgeSecondCardThirteenth,
    edgeThirdCardThirteenth,
    edgeFourthCardThirteenth,
    edgeFifthCardThirteenth,
    edgeSixthCardThirteenth,
  ],
  nodes: [
    nodeFirstCardThirteenth,
    nodeSecondCardThirteenth,
    nodeThirdCardThirteenth,
    nodeFourthCardThirteenth,
    nodeFifthCardThirteenth,
    nodeSixthCardThirteenth,
  ],
  value: 0,
  type: undefined,
}