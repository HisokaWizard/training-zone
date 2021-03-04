import { Card, CardNames, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardTenth: Edge = {
  cardIds: [MapPositions.tenth, MapPositions.eighteenth],
  cardNodePair: [],
}
const edgeSecondCardTenth: Edge = {
  cardIds: [MapPositions.tenth, MapPositions.seventeenth],
  cardNodePair: [],
}
const edgeThirdCardTenth: Edge = {
  cardIds: [MapPositions.tenth, MapPositions.ninth],
  cardNodePair: [],
}
const edgeFourthCardTenth: Edge = {
  cardIds: [MapPositions.tenth],
  cardNodePair: [],
}
const edgeFifthCardTenth: Edge = {
  cardIds: [MapPositions.tenth],
  cardNodePair: [],
}
const edgeSixthCardTenth: Edge = {
  cardIds: [MapPositions.tenth, MapPositions.eleventh],
  cardNodePair: [],
}

const tenthCardNodeKey = (nodeName: NodeNames) => `${CardNames.tenthCard}_${nodeName}_${MapPositions.tenth}`

const nodeFirstCardTenth: CardNode = {
  cardIds: [MapPositions.tenth, MapPositions.eleventh, MapPositions.eighteenth],
  key: tenthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardTenth, edgeSixthCardTenth]
}

const nodeSecondCardTenth: CardNode = {
  cardIds: [MapPositions.tenth, MapPositions.seventeenth, MapPositions.eighteenth],
  key: tenthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardTenth, edgeSecondCardTenth]
}

const nodeThirdCardTenth: CardNode = {
  cardIds: [MapPositions.tenth, MapPositions.ninth, MapPositions.seventeenth],
  key: tenthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardTenth, edgeThirdCardTenth]
}

const nodeFourthCardTenth: CardNode = {
  cardIds: [MapPositions.tenth, MapPositions.ninth],
  key: tenthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.twoStoneToAny,
  edgeList: [edgeThirdCardTenth, edgeFourthCardTenth]
}

const nodeFifthCardTenth: CardNode = {
  cardIds: [MapPositions.tenth],
  key: tenthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.twoStoneToAny,
  edgeList: [edgeFourthCardTenth, edgeFifthCardTenth]
}

const nodeSixthCardTenth: CardNode = {
  cardIds: [MapPositions.tenth, MapPositions.eleventh],
  key: tenthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardTenth, edgeFifthCardTenth]
}

edgeFirstCardTenth.cardNodePair = [nodeFirstCardTenth, nodeSecondCardTenth];
edgeSecondCardTenth.cardNodePair = [nodeSecondCardTenth, nodeThirdCardTenth];
edgeThirdCardTenth.cardNodePair = [nodeThirdCardTenth, nodeFourthCardTenth];
edgeFourthCardTenth.cardNodePair = [nodeFourthCardTenth, nodeFifthCardTenth];
edgeFifthCardTenth.cardNodePair = [nodeFifthCardTenth, nodeSixthCardTenth];
edgeSixthCardTenth.cardNodePair = [nodeSixthCardTenth, nodeFirstCardTenth];

export const tenthCard: Card = {
  id: MapPositions.tenth,
  edges: [
    edgeFirstCardTenth,
    edgeSecondCardTenth,
    edgeThirdCardTenth,
    edgeFourthCardTenth,
    edgeFifthCardTenth,
    edgeSixthCardTenth,
  ],
  nodes: [
    nodeFirstCardTenth,
    nodeSecondCardTenth,
    nodeThirdCardTenth,
    nodeFourthCardTenth,
    nodeFifthCardTenth,
    nodeSixthCardTenth,
  ],
  value: 0,
  type: undefined,
}