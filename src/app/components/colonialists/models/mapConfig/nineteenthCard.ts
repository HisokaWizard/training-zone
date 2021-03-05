import { Card, CardNames, CardRows, MapPositions } from '../card'
import { Edge } from '../edge'
import { CardNode, NodeNames, SpecialEffects } from '../node'

const edgeFirstCardNineteenth: Edge = {
  cardIds: [MapPositions.nineteenth, MapPositions.fourteenth],
  cardNodeKeyPair: [],
}
const edgeSecondCardNineteenth: Edge = {
  cardIds: [MapPositions.nineteenth, MapPositions.fifteenth],
  cardNodeKeyPair: [],
}
const edgeThirdCardNineteenth: Edge = {
  cardIds: [MapPositions.nineteenth, MapPositions.sixteenth],
  cardNodeKeyPair: [],
}
const edgeFourthCardNineteenth: Edge = {
  cardIds: [MapPositions.nineteenth, MapPositions.seventeenth],
  cardNodeKeyPair: [],
}
const edgeFifthCardNineteenth: Edge = {
  cardIds: [MapPositions.nineteenth, MapPositions.eighteenth],
  cardNodeKeyPair: [],
}
const edgeSixthCardNineteenth: Edge = {
  cardIds: [MapPositions.nineteenth, MapPositions.thirteenth],
  cardNodeKeyPair: [],
}

const nineteenthCardNodeKey = (nodeName: NodeNames) => `${CardNames.nineteenthCard}_${nodeName}_${MapPositions.nineteenth}`

const nodeFirstCardNineteenth: CardNode = {
  cardIds: [MapPositions.nineteenth, MapPositions.thirteenth, MapPositions.fourteenth],
  key: nineteenthCardNodeKey(NodeNames.top),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardNineteenth, edgeSixthCardNineteenth]
}

const nodeSecondCardNineteenth: CardNode = {
  cardIds: [MapPositions.nineteenth, MapPositions.fourteenth, MapPositions.fifteenth],
  key: nineteenthCardNodeKey(NodeNames.topRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFirstCardNineteenth, edgeSecondCardNineteenth]
}

const nodeThirdCardNineteenth: CardNode = {
  cardIds: [MapPositions.nineteenth, MapPositions.fifteenth, MapPositions.sixteenth],
  key: nineteenthCardNodeKey(NodeNames.bottomRight),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeSecondCardNineteenth, edgeThirdCardNineteenth]
}

const nodeFourthCardNineteenth: CardNode = {
  cardIds: [MapPositions.nineteenth, MapPositions.sixteenth, MapPositions.seventeenth],
  key: nineteenthCardNodeKey(NodeNames.bottom),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeThirdCardNineteenth, edgeFourthCardNineteenth]
}

const nodeFifthCardNineteenth: CardNode = {
  cardIds: [MapPositions.nineteenth, MapPositions.seventeenth, MapPositions.eighteenth],
  key: nineteenthCardNodeKey(NodeNames.bottomLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardNineteenth, edgeFifthCardNineteenth]
}

const nodeSixthCardNineteenth: CardNode = {
  cardIds: [MapPositions.nineteenth, MapPositions.eighteenth, MapPositions.thirteenth],
  key: nineteenthCardNodeKey(NodeNames.topLeft),
  busy: false,
  specialEffect: SpecialEffects.none,
  edgeList: [edgeFourthCardNineteenth, edgeFifthCardNineteenth]
}

edgeFirstCardNineteenth.cardNodeKeyPair = [nodeFirstCardNineteenth.key, nodeSecondCardNineteenth.key];
edgeSecondCardNineteenth.cardNodeKeyPair = [nodeSecondCardNineteenth.key, nodeThirdCardNineteenth.key];
edgeThirdCardNineteenth.cardNodeKeyPair = [nodeThirdCardNineteenth.key, nodeFourthCardNineteenth.key];
edgeFourthCardNineteenth.cardNodeKeyPair = [nodeFourthCardNineteenth.key, nodeFifthCardNineteenth.key];
edgeFifthCardNineteenth.cardNodeKeyPair = [nodeFifthCardNineteenth.key, nodeSixthCardNineteenth.key];
edgeSixthCardNineteenth.cardNodeKeyPair = [nodeSixthCardNineteenth.key, nodeFirstCardNineteenth.key];

export const nineteenthCard: Card = {
  id: MapPositions.nineteenth,
  row: CardRows.third,
  edges: [
    edgeFirstCardNineteenth,
    edgeSecondCardNineteenth,
    edgeThirdCardNineteenth,
    edgeFourthCardNineteenth,
    edgeFifthCardNineteenth,
    edgeSixthCardNineteenth,
  ],
  nodes: [
    nodeFirstCardNineteenth,
    nodeSecondCardNineteenth,
    nodeThirdCardNineteenth,
    nodeFourthCardNineteenth,
    nodeFifthCardNineteenth,
    nodeSixthCardNineteenth,
  ],
  value: 0,
  type: undefined,
}