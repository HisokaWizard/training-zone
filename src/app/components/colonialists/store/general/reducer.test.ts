import { randomTwoCubesDropper } from './businessFunctions';


describe('game state reducer', () => {
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
})