import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardSixth: Edge = {
  cardIds: [MapPositions.sixth, MapPositions.fifth],
  cardNodeKeyPair: [],
}
const edgeSecondCardSixth: Edge = {
  cardIds: [MapPositions.sixth],
  cardNodeKeyPair: [],
}
const edgeThirdCardSixth: Edge = {
  cardIds: [MapPositions.sixth],
  cardNodeKeyPair: [],
}
const edgeFourthCardSixth: Edge = {
  cardIds: [MapPositions.sixth, MapPositions.seventh],
  cardNodeKeyPair: [],
}
const edgeFifthCardSixth: Edge = {
  cardIds: [MapPositions.sixth, MapPositions.sixteenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardSixth: Edge = {
  cardIds: [MapPositions.sixth, MapPositions.fifteenth],
  cardNodeKeyPair: [],
}

const sixthCardNodeKey = (nodeName: NodeNames) => `${CardNames.sixthCard}_${nodeName}_${MapPositions.sixth}`

const nodeFirstCardSixth: CardNode = {
  cardIds: [MapPositions.sixth, MapPositions.fifth, MapPositions.fifteenth],
  key: sixthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardSixth, edgeSixthCardSixth]
}

const nodeSecondCardSixth: CardNode = {
  cardIds: [MapPositions.sixth, MapPositions.fifth],
  key: sixthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.twoTreeToAny,
  edgeList: [edgeFirstCardSixth, edgeSecondCardSixth]
}

const nodeThirdCardSixth: CardNode = {
  cardIds: [MapPositions.sixth],
  key: sixthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.twoTreeToAny,
  edgeList: [edgeSecondCardSixth, edgeThirdCardSixth]
}

const nodeFourthCardSixth: CardNode = {
  cardIds: [MapPositions.sixth, MapPositions.seventh],
  key: sixthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardSixth, edgeFourthCardSixth]
}

const nodeFifthCardSixth: CardNode = {
  cardIds: [MapPositions.sixth, MapPositions.seventh, MapPositions.sixteenth],
  key: sixthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardSixth, edgeFifthCardSixth]
}

const nodeSixthCardSixth: CardNode = {
  cardIds: [MapPositions.sixth, MapPositions.fifteenth, MapPositions.sixteenth],
  key: sixthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardSixth, edgeFifthCardSixth]
}

edgeFirstCardSixth.cardNodeKeyPair = [nodeFirstCardSixth.key, nodeSecondCardSixth.key];
edgeSecondCardSixth.cardNodeKeyPair = [nodeSecondCardSixth.key, nodeThirdCardSixth.key];
edgeThirdCardSixth.cardNodeKeyPair = [nodeThirdCardSixth.key, nodeFourthCardSixth.key];
edgeFourthCardSixth.cardNodeKeyPair = [nodeFourthCardSixth.key, nodeFifthCardSixth.key];
edgeFifthCardSixth.cardNodeKeyPair = [nodeFifthCardSixth.key, nodeSixthCardSixth.key];
edgeSixthCardSixth.cardNodeKeyPair = [nodeSixthCardSixth.key, nodeFirstCardSixth.key];

export const sixthCard: Card = {
  id: MapPositions.sixth,
  row: CardRows.fourth,
  edges: [
    edgeFirstCardSixth,
    edgeSecondCardSixth,
    edgeThirdCardSixth,
    edgeFourthCardSixth,
    edgeFifthCardSixth,
    edgeSixthCardSixth,
  ],
  nodes: [
    nodeFirstCardSixth,
    nodeSecondCardSixth,
    nodeThirdCardSixth,
    nodeFourthCardSixth,
    nodeFifthCardSixth,
    nodeSixthCardSixth,
  ],
  value: 0,
  type: undefined,
}