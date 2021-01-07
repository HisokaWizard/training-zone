import * as THREE from 'three';
import { coefficientDiameter, coefficientOrbitalRotation, SOLAR_ROTATE_ITS_SELF } from './solar';
import marsTexture from '@models/mars.jpg';
import { orbitalRotation, PlanetMovingConfig } from '../utils/math';

const MARS_SIZE = 3378 * 30; // scale instead of real x30
export const MARS_START_POSITION = {
  X: 5.0,
  Y: 0,
  Z: 0,
};
const MARS_ORBITAL_ROTATION = 100000 / 687; // 687 days

export const marsConfig: PlanetMovingConfig = {
  selfRotate: SOLAR_ROTATE_ITS_SELF * 25, // 1 day
  orbitalRotation: orbitalRotation(MARS_ORBITAL_ROTATION / coefficientOrbitalRotation, MARS_START_POSITION.X),
}

export const marsMesh = () => {
  const texture = new THREE.TextureLoader().load(marsTexture);
  const geometry = new THREE.SphereGeometry(MARS_SIZE / coefficientDiameter, 32, 32);
  const material = new THREE.MeshLambertMaterial({ map: texture });
  const mars = new THREE.Mesh(geometry, material);
  mars.position.set(MARS_START_POSITION.X, 0, 0);
  return mars;
}