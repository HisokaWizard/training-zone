import { Card, CardNames, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardEighth: Edge = {
  cardIds: [MapPositions.eighth, MapPositions.sixteenth],
  cardNodePair: [],
}
const edgeSecondCardEighth: Edge = {
  cardIds: [MapPositions.eighth, MapPositions.seventh],
  cardNodePair: [],
}
const edgeThirdCardEighth: Edge = {
  cardIds: [MapPositions.eighth],
  cardNodePair: [],
}
const edgeFourthCardEighth: Edge = {
  cardIds: [MapPositions.eighth],
  cardNodePair: [],
}
const edgeFifthCardEighth: Edge = {
  cardIds: [MapPositions.eighth, MapPositions.ninth],
  cardNodePair: [],
}
const edgeSixthCardEighth: Edge = {
  cardIds: [MapPositions.eighth, MapPositions.seventeenth],
  cardNodePair: [],
}

const eighthCardNodeKey = (nodeName: NodeNames) => `${CardNames.eighthCard}_${nodeName}_${MapPositions.eighth}`

const nodeFirstCardEighth: CardNode = {
  cardIds: [MapPositions.eighth, MapPositions.sixteenth, MapPositions.seventeenth],
  key: eighthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardEighth, edgeSixthCardEighth]
}

const nodeSecondCardEighth: CardNode = {
  cardIds: [MapPositions.eighth, MapPositions.seventh, MapPositions.sixteenth],
  key: eighthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardEighth, edgeSecondCardEighth]
}

const nodeThirdCardEighth: CardNode = {
  cardIds: [MapPositions.eighth, MapPositions.seventh],
  key: eighthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardEighth, edgeThirdCardEighth]
}

const nodeFourthCardEighth: CardNode = {
  cardIds: [MapPositions.eighth],
  key: eighthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.twoWheatToAny,
  edgeList: [edgeThirdCardEighth, edgeFourthCardEighth]
}

const nodeFifthCardEighth: CardNode = {
  cardIds: [MapPositions.eighth, MapPositions.ninth],
  key: eighthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.twoWheatToAny,
  edgeList: [edgeFourthCardEighth, edgeFifthCardEighth]
}

const nodeSixthCardEighth: CardNode = {
  cardIds: [MapPositions.eighth, MapPositions.ninth, MapPositions.seventeenth],
  key: eighthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardEighth, edgeFifthCardEighth]
}

edgeFirstCardEighth.cardNodePair = [nodeFirstCardEighth, nodeSecondCardEighth];
edgeSecondCardEighth.cardNodePair = [nodeSecondCardEighth, nodeThirdCardEighth];
edgeThirdCardEighth.cardNodePair = [nodeThirdCardEighth, nodeFourthCardEighth];
edgeFourthCardEighth.cardNodePair = [nodeFourthCardEighth, nodeFifthCardEighth];
edgeFifthCardEighth.cardNodePair = [nodeFifthCardEighth, nodeSixthCardEighth];
edgeSixthCardEighth.cardNodePair = [nodeSixthCardEighth, nodeFirstCardEighth];

export const eighthCard: Card = {
  id: MapPositions.eighth,
  edges: [
    edgeFirstCardEighth,
    edgeSecondCardEighth,
    edgeThirdCardEighth,
    edgeFourthCardEighth,
    edgeFifthCardEighth,
    edgeSixthCardEighth,
  ],
  nodes: [
    nodeFirstCardEighth,
    nodeSecondCardEighth,
    nodeThirdCardEighth,
    nodeFourthCardEighth,
    nodeFifthCardEighth,
    nodeSixthCardEighth,
  ],
  value: 0,
  type: undefined,
}