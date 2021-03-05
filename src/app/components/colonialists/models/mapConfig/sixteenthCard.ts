import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardSixteenth: Edge = {
  cardIds: [MapPositions.sixteenth, MapPositions.fifteenth],
  cardNodeKeyPair: [],
}
const edgeSecondCardSixteenth: Edge = {
  cardIds: [MapPositions.sixteenth, MapPositions.sixth],
  cardNodeKeyPair: [],
}
const edgeThirdCardSixteenth: Edge = {
  cardIds: [MapPositions.sixteenth, MapPositions.seventh],
  cardNodeKeyPair: [],
}
const edgeFourthCardSixteenth: Edge = {
  cardIds: [MapPositions.sixteenth, MapPositions.eighth],
  cardNodeKeyPair: [],
}
const edgeFifthCardSixteenth: Edge = {
  cardIds: [MapPositions.sixteenth, MapPositions.seventeenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardSixteenth: Edge = {
  cardIds: [MapPositions.sixteenth, MapPositions.nineteenth],
  cardNodeKeyPair: [],
}

const sixteenthCardNodeKey = (nodeName: NodeNames) => `${CardNames.sixteenthCard}_${nodeName}_${MapPositions.sixteenth}`

const nodeFirstCardSixteenth: CardNode = {
  cardIds: [MapPositions.sixteenth, MapPositions.fifteenth, MapPositions.nineteenth],
  key: sixteenthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardSixteenth, edgeSixthCardSixteenth]
}

const nodeSecondCardSixteenth: CardNode = {
  cardIds: [MapPositions.sixteenth, MapPositions.sixth, MapPositions.fifteenth],
  key: sixteenthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardSixteenth, edgeSecondCardSixteenth]
}

const nodeThirdCardSixteenth: CardNode = {
  cardIds: [MapPositions.sixteenth, MapPositions.sixth, MapPositions.seventh],
  key: sixteenthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardSixteenth, edgeThirdCardSixteenth]
}

const nodeFourthCardSixteenth: CardNode = {
  cardIds: [MapPositions.sixteenth, MapPositions.seventh, MapPositions.eighth],
  key: sixteenthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardSixteenth, edgeFourthCardSixteenth]
}

const nodeFifthCardSixteenth: CardNode = {
  cardIds: [MapPositions.sixteenth, MapPositions.eighth, MapPositions.seventeenth],
  key: sixteenthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardSixteenth, edgeFifthCardSixteenth]
}

const nodeSixthCardSixteenth: CardNode = {
  cardIds: [MapPositions.sixteenth, MapPositions.seventeenth, MapPositions.nineteenth],
  key: sixteenthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardSixteenth, edgeFifthCardSixteenth]
}

edgeFirstCardSixteenth.cardNodeKeyPair = [nodeFirstCardSixteenth.key, nodeSecondCardSixteenth.key];
edgeSecondCardSixteenth.cardNodeKeyPair = [nodeSecondCardSixteenth.key, nodeThirdCardSixteenth.key];
edgeThirdCardSixteenth.cardNodeKeyPair = [nodeThirdCardSixteenth.key, nodeFourthCardSixteenth.key];
edgeFourthCardSixteenth.cardNodeKeyPair = [nodeFourthCardSixteenth.key, nodeFifthCardSixteenth.key];
edgeFifthCardSixteenth.cardNodeKeyPair = [nodeFifthCardSixteenth.key, nodeSixthCardSixteenth.key];
edgeSixthCardSixteenth.cardNodeKeyPair = [nodeSixthCardSixteenth.key, nodeFirstCardSixteenth.key];

export const sixteenthCard: Card = {
  id: MapPositions.sixteenth,
  row: CardRows.fourth,
  edges: [
    edgeFirstCardSixteenth,
    edgeSecondCardSixteenth,
    edgeThirdCardSixteenth,
    edgeFourthCardSixteenth,
    edgeFifthCardSixteenth,
    edgeSixthCardSixteenth,
  ],
  nodes: [
    nodeFirstCardSixteenth,
    nodeSecondCardSixteenth,
    nodeThirdCardSixteenth,
    nodeFourthCardSixteenth,
    nodeFifthCardSixteenth,
    nodeSixthCardSixteenth,
  ],
  value: 0,
  type: undefined,
}