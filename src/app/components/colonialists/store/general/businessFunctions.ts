import { cloneDeep } from 'lodash';
import { Card } from '../../models/card';
import { cardsLimit, CardTypes, GameMap } from '../../models/map';

export const mapGenerator = (): GameMap => {
  const gameMap: GameMap = {
    cards: [],
  }
  const generatorConfig: CardTypes[] = generateMapConfig();
  for (let index = 0; index < generatorConfig.length; index++) {

  }
  return gameMap;
}

export const createCard = (): Card => {
  return;
}

export const generateMapConfig = (): CardTypes[] => {
  const cardConfig: CardTypes[] = [];
  const cloneCardsLimit = cloneDeep(cardsLimit);
  while (true) {
    const isReady = cloneCardsLimit[1] === 0
    && cloneCardsLimit[2] === 0
    && cloneCardsLimit[3] === 0
    && cloneCardsLimit[4] === 0
    && cloneCardsLimit[5] === 0
    && cloneCardsLimit[6] === 0;
    if (isReady) {
      break;
    }
    const cardTypeId: CardTypes = getRandomCubeValue();
    if (cloneCardsLimit[cardTypeId] !== 0) {
      cardConfig.push(cardTypeId);
      cloneCardsLimit[cardTypeId]--;
    }
  }
  return cardConfig;
}

export const randomTwoCubesDropper = () => {
  const cubeFirst = getRandomCubeValue();
  const cubeSecond = getRandomCubeValue();
  return cubeFirst + cubeSecond;
}

export const getRandomCubeValue = () => {
  const value = Math.round((Math.random() * 6));
  return value === 0 ? 1 : value;
}