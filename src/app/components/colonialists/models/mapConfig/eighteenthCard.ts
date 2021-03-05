import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardEighteenth: Edge = {
  cardIds: [MapPositions.eighteenth, MapPositions.thirteenth],
  cardNodeKeyPair: [],
}
const edgeSecondCardEighteenth: Edge = {
  cardIds: [MapPositions.eighteenth, MapPositions.nineteenth],
  cardNodeKeyPair: [],
}
const edgeThirdCardEighteenth: Edge = {
  cardIds: [MapPositions.eighteenth, MapPositions.seventeenth],
  cardNodeKeyPair: [],
}
const edgeFourthCardEighteenth: Edge = {
  cardIds: [MapPositions.eighteenth, MapPositions.tenth],
  cardNodeKeyPair: [],
}
const edgeFifthCardEighteenth: Edge = {
  cardIds: [MapPositions.eighteenth, MapPositions.eleventh],
  cardNodeKeyPair: [],
}
const edgeSixthCardEighteenth: Edge = {
  cardIds: [MapPositions.eighteenth, MapPositions.twelfth],
  cardNodeKeyPair: [],
}

const eighteenthCardNodeKey = (nodeName: NodeNames) => `${CardNames.eighteenthCard}_${nodeName}_${MapPositions.eighteenth}`

const nodeFirstCardEighteenth: CardNode = {
  cardIds: [MapPositions.eighteenth, MapPositions.twelfth, MapPositions.thirteenth],
  key: eighteenthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardEighteenth, edgeSixthCardEighteenth]
}

const nodeSecondCardEighteenth: CardNode = {
  cardIds: [MapPositions.eighteenth, MapPositions.thirteenth, MapPositions.nineteenth],
  key: eighteenthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardEighteenth, edgeSecondCardEighteenth]
}

const nodeThirdCardEighteenth: CardNode = {
  cardIds: [MapPositions.eighteenth, MapPositions.seventeenth, MapPositions.nineteenth],
  key: eighteenthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardEighteenth, edgeThirdCardEighteenth]
}

const nodeFourthCardEighteenth: CardNode = {
  cardIds: [MapPositions.eighteenth, MapPositions.tenth, MapPositions.seventeenth],
  key: eighteenthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardEighteenth, edgeFourthCardEighteenth]
}

const nodeFifthCardEighteenth: CardNode = {
  cardIds: [MapPositions.eighteenth, MapPositions.tenth, MapPositions.eleventh],
  key: eighteenthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardEighteenth, edgeFifthCardEighteenth]
}

const nodeSixthCardEighteenth: CardNode = {
  cardIds: [MapPositions.eighteenth, MapPositions.eleventh, MapPositions.twelfth],
  key: eighteenthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardEighteenth, edgeFifthCardEighteenth]
}

edgeFirstCardEighteenth.cardNodeKeyPair = [nodeFirstCardEighteenth.key, nodeSecondCardEighteenth.key];
edgeSecondCardEighteenth.cardNodeKeyPair = [nodeSecondCardEighteenth.key, nodeThirdCardEighteenth.key];
edgeThirdCardEighteenth.cardNodeKeyPair = [nodeThirdCardEighteenth.key, nodeFourthCardEighteenth.key];
edgeFourthCardEighteenth.cardNodeKeyPair = [nodeFourthCardEighteenth.key, nodeFifthCardEighteenth.key];
edgeFifthCardEighteenth.cardNodeKeyPair = [nodeFifthCardEighteenth.key, nodeSixthCardEighteenth.key];
edgeSixthCardEighteenth.cardNodeKeyPair = [nodeSixthCardEighteenth.key, nodeFirstCardEighteenth.key];

export const eighteenthCard: Card = {
  id: MapPositions.eighteenth,
  row: CardRows.third,
  edges: [
    edgeFirstCardEighteenth,
    edgeSecondCardEighteenth,
    edgeThirdCardEighteenth,
    edgeFourthCardEighteenth,
    edgeFifthCardEighteenth,
    edgeSixthCardEighteenth,
  ],
  nodes: [
    nodeFirstCardEighteenth,
    nodeSecondCardEighteenth,
    nodeThirdCardEighteenth,
    nodeFourthCardEighteenth,
    nodeFifthCardEighteenth,
    nodeSixthCardEighteenth,
  ],
  value: 0,
  type: undefined,
}