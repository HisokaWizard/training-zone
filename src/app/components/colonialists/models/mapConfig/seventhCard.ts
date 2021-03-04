import { Card, CardNames, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardSeventh: Edge = {
  cardIds: [MapPositions.seventh, MapPositions.sixth],
  cardNodePair: [],
}
const edgeSecondCardSeventh: Edge = {
  cardIds: [MapPositions.seventh],
  cardNodePair: [],
}
const edgeThirdCardSeventh: Edge = {
  cardIds: [MapPositions.seventh],
  cardNodePair: [],
}
const edgeFourthCardSeventh: Edge = {
  cardIds: [MapPositions.seventh],
  cardNodePair: [],
}
const edgeFifthCardSeventh: Edge = {
  cardIds: [MapPositions.seventh, MapPositions.eighth],
  cardNodePair: [],
}
const edgeSixthCardSeventh: Edge = {
  cardIds: [MapPositions.seventh, MapPositions.sixteenth],
  cardNodePair: [],
}

const seventhCardNodeKey = (nodeName: NodeNames) => `${CardNames.seventhCard}_${nodeName}_${MapPositions.seventh}`

const nodeFirstCardSeventh: CardNode = {
  cardIds: [MapPositions.seventh, MapPositions.sixth, MapPositions.sixteenth],
  key: seventhCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardSeventh, edgeSixthCardSeventh]
}

const nodeSecondCardSeventh: CardNode = {
  cardIds: [MapPositions.seventh, MapPositions.sixth],
  key: seventhCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardSeventh, edgeSecondCardSeventh]
}

const nodeThirdCardSeventh: CardNode = {
  cardIds: [MapPositions.seventh],
  key: seventhCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeSecondCardSeventh, edgeThirdCardSeventh]
}

const nodeFourthCardSeventh: CardNode = {
  cardIds: [MapPositions.seventh],
  key: seventhCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeThirdCardSeventh, edgeFourthCardSeventh]
}

const nodeFifthCardSeventh: CardNode = {
  cardIds: [MapPositions.seventh, MapPositions.eighth],
  key: seventhCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardSeventh, edgeFifthCardSeventh]
}

const nodeSixthCardSeventh: CardNode = {
  cardIds: [MapPositions.seventh, MapPositions.eighth, MapPositions.sixteenth],
  key: seventhCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardSeventh, edgeFifthCardSeventh]
}

edgeFirstCardSeventh.cardNodePair = [nodeFirstCardSeventh, nodeSecondCardSeventh];
edgeSecondCardSeventh.cardNodePair = [nodeSecondCardSeventh, nodeThirdCardSeventh];
edgeThirdCardSeventh.cardNodePair = [nodeThirdCardSeventh, nodeFourthCardSeventh];
edgeFourthCardSeventh.cardNodePair = [nodeFourthCardSeventh, nodeFifthCardSeventh];
edgeFifthCardSeventh.cardNodePair = [nodeFifthCardSeventh, nodeSixthCardSeventh];
edgeSixthCardSeventh.cardNodePair = [nodeSixthCardSeventh, nodeFirstCardSeventh];

export const seventhCard: Card = {
  id: MapPositions.seventh,
  edges: [
    edgeFirstCardSeventh,
    edgeSecondCardSeventh,
    edgeThirdCardSeventh,
    edgeFourthCardSeventh,
    edgeFifthCardSeventh,
    edgeSixthCardSeventh,
  ],
  nodes: [
    nodeFirstCardSeventh,
    nodeSecondCardSeventh,
    nodeThirdCardSeventh,
    nodeFourthCardSeventh,
    nodeFifthCardSeventh,
    nodeSixthCardSeventh,
  ],
  value: 0,
  type: undefined,
}