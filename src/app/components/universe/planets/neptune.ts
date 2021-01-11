import * as THREE from 'three';
import { coefficientDiameter, coefficientOrbitalRotation, SOLAR_ROTATE_ITS_SELF } from './solar';
import neptuneTexture from '@models/neptune.jpg';
import { orbitalRotation, PlanetMovingConfig } from '../utils/math';

const NEPTUNE_SIZE = 24776 * 5; // scale instead of real x5
export const NEPTUNE_START_POSITION = {
  X: 12.5,
  Y: 0,
  Z: 0,
};
const NEPTUNE_ORBITAL_ROTATION = 100000 / 59800; // 59800 days

export const neptuneConfig: PlanetMovingConfig = {
  selfRotate: SOLAR_ROTATE_ITS_SELF * 38, // ~ 16 hours
  orbitalRotation: orbitalRotation(NEPTUNE_ORBITAL_ROTATION / coefficientOrbitalRotation, NEPTUNE_START_POSITION.X),
}

export const neptuneMesh = () => {
  const texture = new THREE.TextureLoader().load(neptuneTexture);
  const geometry = new THREE.SphereGeometry(NEPTUNE_SIZE / coefficientDiameter, 32, 32);
  const material = new THREE.MeshLambertMaterial({ map: texture, wireframe: false });
  const neptune = new THREE.Mesh(geometry, material);
  neptune.position.set(NEPTUNE_START_POSITION.X, 0, 0);
  return neptune;
}