import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardTwelfth: Edge = {
  cardIds: [MapPositions.twelfth, MapPositions.first],
  cardNodeKeyPair: [],
}
const edgeSecondCardTwelfth: Edge = {
  cardIds: [MapPositions.twelfth, MapPositions.thirteenth],
  cardNodeKeyPair: [],
}
const edgeThirdCardTwelfth: Edge = {
  cardIds: [MapPositions.twelfth, MapPositions.eighteenth],
  cardNodeKeyPair: [],
}
const edgeFourthCardTwelfth: Edge = {
  cardIds: [MapPositions.twelfth, MapPositions.eleventh],
  cardNodeKeyPair: [],
}
const edgeFifthCardTwelfth: Edge = {
  cardIds: [MapPositions.twelfth],
  cardNodeKeyPair: [],
}
const edgeSixthCardTwelfth: Edge = {
  cardIds: [MapPositions.twelfth],
  cardNodeKeyPair: [],
}

const twelfthCardNodeKey = (nodeName: NodeNames) => `${CardNames.twelfthCard}_${nodeName}_${MapPositions.twelfth}`

const nodeFirstCardTwelfth: CardNode = {
  cardIds: [MapPositions.twelfth, MapPositions.first],
  key: twelfthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardTwelfth, edgeSixthCardTwelfth]
}

const nodeSecondCardTwelfth: CardNode = {
  cardIds: [MapPositions.twelfth, MapPositions.first, MapPositions.thirteenth],
  key: twelfthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardTwelfth, edgeSecondCardTwelfth]
}

const nodeThirdCardTwelfth: CardNode = {
  cardIds: [MapPositions.twelfth, MapPositions.thirteenth, MapPositions.eighteenth],
  key: twelfthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardTwelfth, edgeThirdCardTwelfth]
}

const nodeFourthCardTwelfth: CardNode = {
  cardIds: [MapPositions.twelfth, MapPositions.eleventh, MapPositions.eighteenth],
  key: twelfthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardTwelfth, edgeFourthCardTwelfth]
}

const nodeFifthCardTwelfth: CardNode = {
  cardIds: [MapPositions.twelfth, MapPositions.eleventh],
  key: twelfthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeFourthCardTwelfth, edgeFifthCardTwelfth]
}

const nodeSixthCardTwelfth: CardNode = {
  cardIds: [MapPositions.twelfth],
  key: twelfthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeFourthCardTwelfth, edgeFifthCardTwelfth]
}

edgeFirstCardTwelfth.cardNodeKeyPair = [nodeFirstCardTwelfth.key, nodeSecondCardTwelfth.key];
edgeSecondCardTwelfth.cardNodeKeyPair = [nodeSecondCardTwelfth.key, nodeThirdCardTwelfth.key];
edgeThirdCardTwelfth.cardNodeKeyPair = [nodeThirdCardTwelfth.key, nodeFourthCardTwelfth.key];
edgeFourthCardTwelfth.cardNodeKeyPair = [nodeFourthCardTwelfth.key, nodeFifthCardTwelfth.key];
edgeFifthCardTwelfth.cardNodeKeyPair = [nodeFifthCardTwelfth.key, nodeSixthCardTwelfth.key];
edgeSixthCardTwelfth.cardNodeKeyPair = [nodeSixthCardTwelfth.key, nodeFirstCardTwelfth.key];

export const twelfthCard: Card = {
  id: MapPositions.twelfth,
  row: CardRows.second,
  edges: [
    edgeFirstCardTwelfth,
    edgeSecondCardTwelfth,
    edgeThirdCardTwelfth,
    edgeFourthCardTwelfth,
    edgeFifthCardTwelfth,
    edgeSixthCardTwelfth,
  ],
  nodes: [
    nodeFirstCardTwelfth,
    nodeSecondCardTwelfth,
    nodeThirdCardTwelfth,
    nodeFourthCardTwelfth,
    nodeFifthCardTwelfth,
    nodeSixthCardTwelfth,
  ],
  value: 0,
  type: undefined,
}