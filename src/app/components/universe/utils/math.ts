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

export interface PlanetMovingConfig {
  selfRotate: number;
  orbitalRotation: () => {x: number, y: number};
}

export const planetRotationAndMoving = (
  planet: THREE.Mesh, planetConfig: PlanetMovingConfig
): {position: THREE.Vector3, rotation: THREE.Euler} => {
  planet.rotation.z += rotationSpeed(planetConfig.selfRotate);
  const newPlanetPos = planetConfig.orbitalRotation();
  planet.position.x = newPlanetPos.x;
  planet.position.y = newPlanetPos.y;
  return {position: planet.position, rotation: planet.rotation};
}