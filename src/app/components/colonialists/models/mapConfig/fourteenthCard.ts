import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardFourteenth: Edge = {
  cardIds: [MapPositions.fourteenth, MapPositions.third],
  cardNodeKeyPair: [],
}
const edgeSecondCardFourteenth: Edge = {
  cardIds: [MapPositions.fourteenth, MapPositions.fourth],
  cardNodeKeyPair: [],
}
const edgeThirdCardFourteenth: Edge = {
  cardIds: [MapPositions.fourteenth, MapPositions.fifteenth],
  cardNodeKeyPair: [],
}
const edgeFourthCardFourteenth: Edge = {
  cardIds: [MapPositions.fourteenth, MapPositions.nineteenth],
  cardNodeKeyPair: [],
}
const edgeFifthCardFourteenth: Edge = {
  cardIds: [MapPositions.fourteenth, MapPositions.thirteenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardFourteenth: Edge = {
  cardIds: [MapPositions.fourteenth, MapPositions.second],
  cardNodeKeyPair: [],
}

const fourteenthCardNodeKey = (nodeName: NodeNames) => `${CardNames.fourteenthCard}_${nodeName}_${MapPositions.fourteenth}`

const nodeFirstCardFourteenth: CardNode = {
  cardIds: [MapPositions.fourteenth, MapPositions.second, MapPositions.third],
  key: fourteenthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardFourteenth, edgeSixthCardFourteenth]
}

const nodeSecondCardFourteenth: CardNode = {
  cardIds: [MapPositions.fourteenth, MapPositions.third, MapPositions.fourth],
  key: fourteenthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardFourteenth, edgeSecondCardFourteenth]
}

const nodeThirdCardFourteenth: CardNode = {
  cardIds: [MapPositions.fourteenth, MapPositions.fourth, MapPositions.fifteenth],
  key: fourteenthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardFourteenth, edgeThirdCardFourteenth]
}

const nodeFourthCardFourteenth: CardNode = {
  cardIds: [MapPositions.fourteenth, MapPositions.fifteenth, MapPositions.nineteenth],
  key: fourteenthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardFourteenth, edgeFourthCardFourteenth]
}

const nodeFifthCardFourteenth: CardNode = {
  cardIds: [MapPositions.fourteenth, MapPositions.thirteenth, MapPositions.nineteenth],
  key: fourteenthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardFourteenth, edgeFifthCardFourteenth]
}

const nodeSixthCardFourteenth: CardNode = {
  cardIds: [MapPositions.fourteenth, MapPositions.second, MapPositions.thirteenth],
  key: fourteenthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardFourteenth, edgeFifthCardFourteenth]
}

edgeFirstCardFourteenth.cardNodeKeyPair = [nodeFirstCardFourteenth.key, nodeSecondCardFourteenth.key];
edgeSecondCardFourteenth.cardNodeKeyPair = [nodeSecondCardFourteenth.key, nodeThirdCardFourteenth.key];
edgeThirdCardFourteenth.cardNodeKeyPair = [nodeThirdCardFourteenth.key, nodeFourthCardFourteenth.key];
edgeFourthCardFourteenth.cardNodeKeyPair = [nodeFourthCardFourteenth.key, nodeFifthCardFourteenth.key];
edgeFifthCardFourteenth.cardNodeKeyPair = [nodeFifthCardFourteenth.key, nodeSixthCardFourteenth.key];
edgeSixthCardFourteenth.cardNodeKeyPair = [nodeSixthCardFourteenth.key, nodeFirstCardFourteenth.key];

export const fourteenthCard: Card = {
  id: MapPositions.fourteenth,
  row: CardRows.second,
  edges: [
    edgeFirstCardFourteenth,
    edgeSecondCardFourteenth,
    edgeThirdCardFourteenth,
    edgeFourthCardFourteenth,
    edgeFifthCardFourteenth,
    edgeSixthCardFourteenth,
  ],
  nodes: [
    nodeFirstCardFourteenth,
    nodeSecondCardFourteenth,
    nodeThirdCardFourteenth,
    nodeFourthCardFourteenth,
    nodeFifthCardFourteenth,
    nodeSixthCardFourteenth,
  ],
  value: 0,
  type: undefined,
}