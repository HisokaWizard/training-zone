import { coefficientRotation } from '../planets/solar';

export const degreeToRadian = (degree: number) => {
  return degree * Math.PI / 180;
}

export const rotationSpeed = (planetItSelfRotate: number) => {
  return planetItSelfRotate / coefficientRotation;
}

export const orbitalRotation = (planetSpeed: number, startPosition: number) => {
  let increaseSpeed = 0;
  return () => {
    increaseSpeed += planetSpeed;
    const radius = startPosition;
    const newX = radius * Math.cos(degreeToRadian(increaseSpeed));
    const newY = radius * Math.sin(degreeToRadian(increaseSpeed));
    return {x: newX, y: newY};
  }
}