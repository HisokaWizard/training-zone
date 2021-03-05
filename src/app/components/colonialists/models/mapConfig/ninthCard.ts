import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardNinth: Edge = {
  cardIds: [MapPositions.ninth, MapPositions.sixteenth],
  cardNodeKeyPair: [],
}
const edgeSecondCardNinth: Edge = {
  cardIds: [MapPositions.ninth, MapPositions.seventh],
  cardNodeKeyPair: [],
}
const edgeThirdCardNinth: Edge = {
  cardIds: [MapPositions.ninth],
  cardNodeKeyPair: [],
}
const edgeFourthCardNinth: Edge = {
  cardIds: [MapPositions.ninth],
  cardNodeKeyPair: [],
}
const edgeFifthCardNinth: Edge = {
  cardIds: [MapPositions.ninth, MapPositions.ninth],
  cardNodeKeyPair: [],
}
const edgeSixthCardNinth: Edge = {
  cardIds: [MapPositions.ninth, MapPositions.seventeenth],
  cardNodeKeyPair: [],
}

const ninthCardNodeKey = (nodeName: NodeNames) => `${CardNames.ninthCard}_${nodeName}_${MapPositions.ninth}`

const nodeFirstCardNinth: CardNode = {
  cardIds: [MapPositions.ninth, MapPositions.tenth, MapPositions.seventeenth],
  key: ninthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardNinth, edgeSixthCardNinth]
}

const nodeSecondCardNinth: CardNode = {
  cardIds: [MapPositions.ninth, MapPositions.eighth, MapPositions.seventeenth],
  key: ninthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardNinth, edgeSecondCardNinth]
}

const nodeThirdCardNinth: CardNode = {
  cardIds: [MapPositions.ninth, MapPositions.eighth],
  key: ninthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.twoWheatToAny,
  edgeList: [edgeSecondCardNinth, edgeThirdCardNinth]
}

const nodeFourthCardNinth: CardNode = {
  cardIds: [MapPositions.ninth],
  key: ninthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardNinth, edgeFourthCardNinth]
}

const nodeFifthCardNinth: CardNode = {
  cardIds: [MapPositions.ninth],
  key: ninthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardNinth, edgeFifthCardNinth]
}

const nodeSixthCardNinth: CardNode = {
  cardIds: [MapPositions.ninth, MapPositions.tenth],
  key: ninthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.twoStoneToAny,
  edgeList: [edgeFourthCardNinth, edgeFifthCardNinth]
}

edgeFirstCardNinth.cardNodeKeyPair = [nodeFirstCardNinth.key, nodeSecondCardNinth.key];
edgeSecondCardNinth.cardNodeKeyPair = [nodeSecondCardNinth.key, nodeThirdCardNinth.key];
edgeThirdCardNinth.cardNodeKeyPair = [nodeThirdCardNinth.key, nodeFourthCardNinth.key];
edgeFourthCardNinth.cardNodeKeyPair = [nodeFourthCardNinth.key, nodeFifthCardNinth.key];
edgeFifthCardNinth.cardNodeKeyPair = [nodeFifthCardNinth.key, nodeSixthCardNinth.key];
edgeSixthCardNinth.cardNodeKeyPair = [nodeSixthCardNinth.key, nodeFirstCardNinth.key];

export const ninthCard: Card = {
  id: MapPositions.ninth,
  row: CardRows.fifth,
  edges: [
    edgeFirstCardNinth,
    edgeSecondCardNinth,
    edgeThirdCardNinth,
    edgeFourthCardNinth,
    edgeFifthCardNinth,
    edgeSixthCardNinth,
  ],
  nodes: [
    nodeFirstCardNinth,
    nodeSecondCardNinth,
    nodeThirdCardNinth,
    nodeFourthCardNinth,
    nodeFifthCardNinth,
    nodeSixthCardNinth,
  ],
  value: 0,
  type: undefined,
}