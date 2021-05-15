import { generateCardValues, generateMapConfig, getRandomValue, mapGenerator, randomTwoCubesDropper } from './businessFunctions';

describe('general business function', () => {
  it('check cube dropping', () => {
    const testingFunction = () => {
      const probabilityValues = {
        zero: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0,
        eleven: 0,
        twelve: 0,
      }
      for (let index = 0; index < 100000; index++) {
        const dropCubeResult = randomTwoCubesDropper();
        if (dropCubeResult === 0) probabilityValues.zero++
        else if (dropCubeResult === 1) probabilityValues.one++
        else if (dropCubeResult === 2) probabilityValues.two++
        else if (dropCubeResult === 3) probabilityValues.three++
        else if (dropCubeResult === 4) probabilityValues.four++
        else if (dropCubeResult === 5) probabilityValues.five++
        else if (dropCubeResult === 6) probabilityValues.six++
        else if (dropCubeResult === 7) probabilityValues.seven++
        else if (dropCubeResult === 8) probabilityValues.eight++
        else if (dropCubeResult === 9) probabilityValues.nine++
        else if (dropCubeResult === 10) probabilityValues.ten++
        else if (dropCubeResult === 11) probabilityValues.eleven++ 
        else if (dropCubeResult === 12) probabilityValues.twelve++
        else probabilityValues.zero = 1000000;
      }
      const isError = probabilityValues.one > 0 || probabilityValues.one > 0;
      const isOk = probabilityValues.two > 0 && probabilityValues.three > 0 &&
        probabilityValues.four > 0 && probabilityValues.five > 0 &&
        probabilityValues.six > 0 && probabilityValues.seven > 0 &&
        probabilityValues.eight > 0 && probabilityValues.nine > 0 &&
        probabilityValues.ten > 0 && probabilityValues.eleven > 0 && probabilityValues.twelve > 0;
      console.log(JSON.stringify(probabilityValues))
      return !isError && isOk;
    }
    return expect(testingFunction()).toEqual(true);
  })

  it('check random value', () => {
    const testingFunction = () => {
      for(let index = 0; index < 100000; index++) {
        const randomCubeValue = getRandomValue(6, 1);
        if (randomCubeValue < 1 || randomCubeValue > 6) {
          return true;
        }
      }
      return false;
    }
    return expect(testingFunction()).toEqual(false);
  })

  it('check map config sequence', () => {
    const testingFunction = () => {
      const result = generateMapConfig();
      console.log(result.join(', '));
      return result;
    }
    return expect(testingFunction().length).toEqual(19)
  })

  it('check map values sequence', () => {
    const testingFunction = () => {
      const config = generateMapConfig();
      console.log(config.join(', '));
      const result = generateCardValues(config);
      console.log(result.join(', '));
      return result;
    }
    return expect(testingFunction().length).toEqual(19)
  })

  it('check new map generator', () => {
    return expect(mapGenerator().cards.length).toEqual(19)
  })
})