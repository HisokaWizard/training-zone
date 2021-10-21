import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardTenth: Edge = {
  cardIds: [MapPositions.tenth, MapPositions.eighteenth],
  cardNodeKeyPair: [],
}
const edgeSecondCardTenth: Edge = {
  cardIds: [MapPositions.tenth, MapPositions.seventeenth],
  cardNodeKeyPair: [],
}
const edgeThirdCardTenth: Edge = {
  cardIds: [MapPositions.tenth, MapPositions.ninth],
  cardNodeKeyPair: [],
}
const edgeFourthCardTenth: Edge = {
  cardIds: [MapPositions.tenth],
  cardNodeKeyPair: [],
}
const edgeFifthCardTenth: Edge = {
  cardIds: [MapPositions.tenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardTenth: Edge = {
  cardIds: [MapPositions.tenth, MapPositions.eleventh],
  cardNodeKeyPair: [],
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

edgeFirstCardTenth.cardNodeKeyPair = [nodeFirstCardTenth.key, nodeSecondCardTenth.key];
edgeSecondCardTenth.cardNodeKeyPair = [nodeSecondCardTenth.key, nodeThirdCardTenth.key];
edgeThirdCardTenth.cardNodeKeyPair = [nodeThirdCardTenth.key, nodeFourthCardTenth.key];
edgeFourthCardTenth.cardNodeKeyPair = [nodeFourthCardTenth.key, nodeFifthCardTenth.key];
edgeFifthCardTenth.cardNodeKeyPair = [nodeFifthCardTenth.key, nodeSixthCardTenth.key];
edgeSixthCardTenth.cardNodeKeyPair = [nodeSixthCardTenth.key, nodeFirstCardTenth.key];

export const tenthCard: Card = {
  id: MapPositions.tenth,
  row: CardRows.fourth,
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