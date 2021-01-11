import * as THREE from 'three';
import { coefficientDiameter, coefficientOrbitalRotation, SOLAR_ROTATE_ITS_SELF } from './solar';
import jupiterTexture from '@models/jupiter.jpg';
import { orbitalRotation, PlanetMovingConfig } from '../utils/math';

const JUPITER_SIZE = 71492 * 5; // scale instead of real x5
export const JUPITER_START_POSITION = {
  X: 6.5,
  Y: 0,
  Z: 0,
};
const JUPITER_ORBITAL_ROTATION = 100000 / 4330; // 4330 days

export const jupiterConfig: PlanetMovingConfig = {
  selfRotate: SOLAR_ROTATE_ITS_SELF * 50, // ~ 10 hours
  orbitalRotation: orbitalRotation(JUPITER_ORBITAL_ROTATION / coefficientOrbitalRotation, JUPITER_START_POSITION.X),
}

export const jupiterMesh = () => {
  const texture = new THREE.TextureLoader().load(jupiterTexture);
  const geometry = new THREE.SphereGeometry(JUPITER_SIZE / coefficientDiameter, 32, 32);
  const material = new THREE.MeshLambertMaterial({ map: texture, wireframe: false });
  const jupiter = new THREE.Mesh(geometry, material);
  jupiter.position.set(JUPITER_START_POSITION.X, 0, 0);
  return jupiter;
}