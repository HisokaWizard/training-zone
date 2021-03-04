import { Edge } from './edge';
import { MapValues } from './map';
import { CardNode } from './node';

export enum MapPositions {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  eleventh,
  twelfth,
  thirteenth,
  fourteenth,
  fifteenth,
  sixteenth,
  seventeenth,
  eighteenth,
  nineteenth,
}

export enum CardTypes {
  tree = 1,
  stone = 2,
  sheep = 3,
  clay = 4,
  wheat = 5,
  bandit = 6,
}

export const cardsLimit = {
  [CardTypes.bandit]: 1,
  [CardTypes.stone]: 3,
  [CardTypes.clay]: 3,
  [CardTypes.sheep]: 4,
  [CardTypes.tree]: 4,
  [CardTypes.wheat]: 4,
}

export enum CardNames {
  firstCard = 'FirstCard',
  secondCard = 'SecondCard',
  thirdCard = 'ThirdCard',
  fourthCard = 'FourthCard',
  fifthCard = 'FifthCard',
  sixthCard = 'SixthCard',
  seventhCard = 'SeventhCard',
  eighthCard = 'EighthCard',
  ninthCard = 'NinthCard',
  tenthCard = 'TenthCard',
  eleventhCard = 'EleventhCard',
  twelfthCard = 'TwelfthCard',
  thirteenthCard = 'ThirteenthCard',
  fourteenthCard = 'FourteenthCard',
  fifteenthCard = 'FifteenthCard',
  sixteenthCard = 'SixteenthCard',
  seventeenthCard = 'SeventeenthCard',
  eighteenthCard = 'EighteenthCard',
  nineteenthCard = 'NineteenthCard',
}

export interface Card {
  id: MapPositions;
  edges: Edge[];
  nodes: CardNode[];
  value: MapValues | 0;
  type: CardTypes | undefined;
}