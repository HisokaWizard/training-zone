import { Card, CardNames, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardSixth: Edge = {
  cardIds: [MapPositions.sixth, MapPositions.fifth],
  cardNodePair: [],
}
const edgeSecondCardSixth: Edge = {
  cardIds: [MapPositions.sixth],
  cardNodePair: [],
}
const edgeThirdCardSixth: Edge = {
  cardIds: [MapPositions.sixth],
  cardNodePair: [],
}
const edgeFourthCardSixth: Edge = {
  cardIds: [MapPositions.sixth, MapPositions.seventh],
  cardNodePair: [],
}
const edgeFifthCardSixth: Edge = {
  cardIds: [MapPositions.sixth, MapPositions.sixteenth],
  cardNodePair: [],
}
const edgeSixthCardSixth: Edge = {
  cardIds: [MapPositions.sixth, MapPositions.fifteenth],
  cardNodePair: [],
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

edgeFirstCardSixth.cardNodePair = [nodeFirstCardSixth, nodeSecondCardSixth];
edgeSecondCardSixth.cardNodePair = [nodeSecondCardSixth, nodeThirdCardSixth];
edgeThirdCardSixth.cardNodePair = [nodeThirdCardSixth, nodeFourthCardSixth];
edgeFourthCardSixth.cardNodePair = [nodeFourthCardSixth, nodeFifthCardSixth];
edgeFifthCardSixth.cardNodePair = [nodeFifthCardSixth, nodeSixthCardSixth];
edgeSixthCardSixth.cardNodePair = [nodeSixthCardSixth, nodeFirstCardSixth];

export const sixthCard: Card = {
  id: MapPositions.sixth,
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