import { cloneDeep } from 'lodash';
import { cardsLimit, CardTypes } from '@gameModels/card';
import { GameMap, MapValues, mapValuesLimit } from '@gameModels/map';
import { baseGameMapConfig } from '@/colonialists/models/mapConfig/baseGameMapConfig';

export const mapGenerator = (): GameMap => {
  const gameMap: GameMap = {
    cards: [],
  }
  const cloneBaseConfig = cloneDeep(baseGameMapConfig);
  const generatorConfig: CardTypes[] = generateMapConfig();
  const mapValues: MapValues[] = generateCardValues(generatorConfig);
  generatorConfig.forEach((item, index) => {
    cloneBaseConfig[index].type = item;
    cloneBaseConfig[index].value = mapValues[index];
  })
  gameMap.cards = cloneBaseConfig
  return gameMap;
}

export const generateMapConfig = (): CardTypes[] => {
  const cardConfig: CardTypes[] = [];
  const cloneCardsLimit = cloneDeep(cardsLimit);
  while (true) {
    const isEmpty = cloneCardsLimit[1] === 0
    && cloneCardsLimit[2] === 0
    && cloneCardsLimit[3] === 0
    && cloneCardsLimit[4] === 0
    && cloneCardsLimit[5] === 0
    && cloneCardsLimit[6] === 0;
    if (isEmpty) {
      break;
    }
    const cardTypeId: CardTypes = getRandomValue(6, 1);
    if (cloneCardsLimit[cardTypeId] !== 0) {
      cardConfig.push(cardTypeId);
      cloneCardsLimit[cardTypeId]--;
    }
  }
  return cardConfig;
}

export const generateCardValues = (config: CardTypes[]): MapValues[] => {
  const banditIndex = config.indexOf(CardTypes.bandit);
  const valueSequence: MapValues[] = [];
  const cloneMapValues = cloneDeep(mapValuesLimit);
  while (true) {
    const isEmpty = cloneMapValues[2] === 0
    && cloneMapValues[3] === 0
    && cloneMapValues[4] === 0
    && cloneMapValues[5] === 0
    && cloneMapValues[6] === 0
    && cloneMapValues[8] === 0
    && cloneMapValues[9] === 0
    && cloneMapValues[10] === 0
    && cloneMapValues[11] === 0
    && cloneMapValues[12] === 0
    if (isEmpty) {
      break;
    }
    if (valueSequence.length === banditIndex) {
      valueSequence.push(MapValues.bandit);
      continue;
    }
    const mapValue: MapValues = getRandomValue(12, 2);
    if (cloneMapValues[mapValue] !== 0 && mapValue !== MapValues.bandit) {
      valueSequence.push(mapValue);
      cloneMapValues[mapValue]--;
    }
  }
  return valueSequence;
}

export const randomTwoCubesDropper = () => {
  const cubeFirst = getRandomValue(6, 1);
  const cubeSecond = getRandomValue(6, 1);
  return cubeFirst + cubeSecond;
}

export const getRandomValue = (max: number, min: number) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}