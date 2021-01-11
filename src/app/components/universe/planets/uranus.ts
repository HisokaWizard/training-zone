import * as THREE from 'three';
import { coefficientDiameter, coefficientOrbitalRotation, SOLAR_ROTATE_ITS_SELF } from './solar';
import uranusTexture from '@models/uranus.jpg';
import { orbitalRotation, PlanetMovingConfig } from '../utils/math';

const URANUS_SIZE = 25559 * 5; // scale instead of real x5
export const URANUS_START_POSITION = {
  X: 11,
  Y: 0,
  Z: 0,
};
const URANUS_ORBITAL_ROTATION = 100000 / 30558; // 30558 days

export const uranusConfig: PlanetMovingConfig = {
  selfRotate: SOLAR_ROTATE_ITS_SELF * 35, // ~ 17.5 hours
  orbitalRotation: orbitalRotation(URANUS_ORBITAL_ROTATION / coefficientOrbitalRotation, URANUS_START_POSITION.X),
}

export const uranusMesh = () => {
  const texture = new THREE.TextureLoader().load(uranusTexture);
  const geometry = new THREE.SphereGeometry(URANUS_SIZE / coefficientDiameter, 32, 32);
  const material = new THREE.MeshLambertMaterial({ map: texture, wireframe: false });
  const uranus = new THREE.Mesh(geometry, material);
  uranus.position.set(URANUS_START_POSITION.X, 0, 0);
  return uranus;
}