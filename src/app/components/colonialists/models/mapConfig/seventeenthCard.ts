import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardSeventeenth: Edge = {
  cardIds: [MapPositions.seventeenth, MapPositions.nineteenth],
  cardNodeKeyPair: [],
}
const edgeSecondCardSeventeenth: Edge = {
  cardIds: [MapPositions.seventeenth, MapPositions.sixteenth],
  cardNodeKeyPair: [],
}
const edgeThirdCardSeventeenth: Edge = {
  cardIds: [MapPositions.seventeenth, MapPositions.eighth],
  cardNodeKeyPair: [],
}
const edgeFourthCardSeventeenth: Edge = {
  cardIds: [MapPositions.seventeenth, MapPositions.ninth],
  cardNodeKeyPair: [],
}
const edgeFifthCardSeventeenth: Edge = {
  cardIds: [MapPositions.seventeenth, MapPositions.tenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardSeventeenth: Edge = {
  cardIds: [MapPositions.seventeenth, MapPositions.eighteenth],
  cardNodeKeyPair: [],
}

const seventeenthCardNodeKey = (nodeName: NodeNames) => `${CardNames.seventeenthCard}_${nodeName}_${MapPositions.seventeenth}`

const nodeFirstCardSeventeenth: CardNode = {
  cardIds: [MapPositions.seventeenth, MapPositions.eighteenth, MapPositions.nineteenth],
  key: seventeenthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardSeventeenth, edgeSixthCardSeventeenth]
}

const nodeSecondCardSeventeenth: CardNode = {
  cardIds: [MapPositions.seventeenth, MapPositions.sixteenth, MapPositions.nineteenth],
  key: seventeenthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardSeventeenth, edgeSecondCardSeventeenth]
}

const nodeThirdCardSeventeenth: CardNode = {
  cardIds: [MapPositions.seventeenth, MapPositions.eighth, MapPositions.sixteenth],
  key: seventeenthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardSeventeenth, edgeThirdCardSeventeenth]
}

const nodeFourthCardSeventeenth: CardNode = {
  cardIds: [MapPositions.seventeenth, MapPositions.eighth, MapPositions.ninth],
  key: seventeenthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardSeventeenth, edgeFourthCardSeventeenth]
}

const nodeFifthCardSeventeenth: CardNode = {
  cardIds: [MapPositions.seventeenth, MapPositions.ninth, MapPositions.tenth],
  key: seventeenthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardSeventeenth, edgeFifthCardSeventeenth]
}

const nodeSixthCardSeventeenth: CardNode = {
  cardIds: [MapPositions.seventeenth, MapPositions.tenth, MapPositions.eighteenth],
  key: seventeenthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardSeventeenth, edgeFifthCardSeventeenth]
}

edgeFirstCardSeventeenth.cardNodeKeyPair = [nodeFirstCardSeventeenth.key, nodeSecondCardSeventeenth.key];
edgeSecondCardSeventeenth.cardNodeKeyPair = [nodeSecondCardSeventeenth.key, nodeThirdCardSeventeenth.key];
edgeThirdCardSeventeenth.cardNodeKeyPair = [nodeThirdCardSeventeenth.key, nodeFourthCardSeventeenth.key];
edgeFourthCardSeventeenth.cardNodeKeyPair = [nodeFourthCardSeventeenth.key, nodeFifthCardSeventeenth.key];
edgeFifthCardSeventeenth.cardNodeKeyPair = [nodeFifthCardSeventeenth.key, nodeSixthCardSeventeenth.key];
edgeSixthCardSeventeenth.cardNodeKeyPair = [nodeSixthCardSeventeenth.key, nodeFirstCardSeventeenth.key];

export const seventeenthCard: Card = {
  id: MapPositions.seventeenth,
  row: CardRows.fourth,
  edges: [
    edgeFirstCardSeventeenth,
    edgeSecondCardSeventeenth,
    edgeThirdCardSeventeenth,
    edgeFourthCardSeventeenth,
    edgeFifthCardSeventeenth,
    edgeSixthCardSeventeenth,
  ],
  nodes: [
    nodeFirstCardSeventeenth,
    nodeSecondCardSeventeenth,
    nodeThirdCardSeventeenth,
    nodeFourthCardSeventeenth,
    nodeFifthCardSeventeenth,
    nodeSixthCardSeventeenth,
  ],
  value: 0,
  type: undefined,
}