import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardEleventh: Edge = {
  cardIds: [MapPositions.eleventh, MapPositions.twelfth],
  cardNodeKeyPair: [],
}
const edgeSecondCardEleventh: Edge = {
  cardIds: [MapPositions.eleventh, MapPositions.eighteenth],
  cardNodeKeyPair: [],
}
const edgeThirdCardEleventh: Edge = {
  cardIds: [MapPositions.eleventh, MapPositions.tenth],
  cardNodeKeyPair: [],
}
const edgeFourthCardEleventh: Edge = {
  cardIds: [MapPositions.eleventh],
  cardNodeKeyPair: [],
}
const edgeFifthCardEleventh: Edge = {
  cardIds: [MapPositions.eleventh],
  cardNodeKeyPair: [],
}
const edgeSixthCardEleventh: Edge = {
  cardIds: [MapPositions.eleventh],
  cardNodeKeyPair: [],
}

const eleventhCardNodeKey = (nodeName: NodeNames) => `${CardNames.eleventhCard}_${nodeName}_${MapPositions.eleventh}`

const nodeFirstCardEleventh: CardNode = {
  cardIds: [MapPositions.eleventh, MapPositions.twelfth],
  key: eleventhCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardEleventh, edgeSixthCardEleventh]
}

const nodeSecondCardEleventh: CardNode = {
  cardIds: [MapPositions.eleventh, MapPositions.twelfth, MapPositions.eighteenth],
  key: eleventhCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardEleventh, edgeSecondCardEleventh]
}

const nodeThirdCardEleventh: CardNode = {
  cardIds: [MapPositions.eleventh, MapPositions.tenth, MapPositions.eighteenth],
  key: eleventhCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardEleventh, edgeThirdCardEleventh]
}

const nodeFourthCardEleventh: CardNode = {
  cardIds: [MapPositions.eleventh, MapPositions.tenth],
  key: eleventhCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardEleventh, edgeFourthCardEleventh]
}

const nodeFifthCardEleventh: CardNode = {
  cardIds: [MapPositions.eleventh],
  key: eleventhCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeFourthCardEleventh, edgeFifthCardEleventh]
}

const nodeSixthCardEleventh: CardNode = {
  cardIds: [MapPositions.eleventh],
  key: eleventhCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.profitableExchange,
  edgeList: [edgeFourthCardEleventh, edgeFifthCardEleventh]
}

edgeFirstCardEleventh.cardNodeKeyPair = [nodeFirstCardEleventh.key, nodeSecondCardEleventh.key];
edgeSecondCardEleventh.cardNodeKeyPair = [nodeSecondCardEleventh.key, nodeThirdCardEleventh.key];
edgeThirdCardEleventh.cardNodeKeyPair = [nodeThirdCardEleventh.key, nodeFourthCardEleventh.key];
edgeFourthCardEleventh.cardNodeKeyPair = [nodeFourthCardEleventh.key, nodeFifthCardEleventh.key];
edgeFifthCardEleventh.cardNodeKeyPair = [nodeFifthCardEleventh.key, nodeSixthCardEleventh.key];
edgeSixthCardEleventh.cardNodeKeyPair = [nodeSixthCardEleventh.key, nodeFirstCardEleventh.key];

export const eleventhCard: Card = {
  id: MapPositions.eleventh,
  row: CardRows.third,
  edges: [
    edgeFirstCardEleventh,
    edgeSecondCardEleventh,
    edgeThirdCardEleventh,
    edgeFourthCardEleventh,
    edgeFifthCardEleventh,
    edgeSixthCardEleventh,
  ],
  nodes: [
    nodeFirstCardEleventh,
    nodeSecondCardEleventh,
    nodeThirdCardEleventh,
    nodeFourthCardEleventh,
    nodeFifthCardEleventh,
    nodeSixthCardEleventh,
  ],
  value: 0,
  type: undefined,
}