export const randomTwoCubesDropper = () => {
  const getRandomCubeValue = () => Math.round((Math.random() * 6));
  const cubeFirst = getRandomCubeValue();
  const cubeSecond = getRandomCubeValue();
  return (cubeFirst === 0 ? 1 : cubeFirst) + (cubeSecond === 0 ? 1 : cubeSecond);
}