import * as THREE from 'three';
import { coefficientDiameter, coefficientOrbitalRotation, SOLAR_ROTATE_ITS_SELF } from './solar';
import earthTexture from '@models/earth.jpg';
import { orbitalRotation, PlanetMovingConfig } from '../utils/math';

const EARTH_SIZE = 6378 * 30; // scale instead of real x50
export const EARTH_START_POSITION = {
  X: 3.5,
  Y: 0,
  Z: 0,
};
const EARTH_ORBITAL_ROTATION = 100000 / 365; // 224 days

export const earthConfig: PlanetMovingConfig = {
  selfRotate: SOLAR_ROTATE_ITS_SELF * 27, // 1 day
  orbitalRotation: orbitalRotation(EARTH_ORBITAL_ROTATION / coefficientOrbitalRotation, EARTH_START_POSITION.X),
}

export const earthMesh = () => {
  const texture = new THREE.TextureLoader().load(earthTexture);
  const geometry = new THREE.SphereGeometry(EARTH_SIZE / coefficientDiameter, 32, 32);
  const material = new THREE.MeshLambertMaterial({ map: texture });
  const earth = new THREE.Mesh(geometry, material);
  earth.position.set(EARTH_START_POSITION.X, 0, 0);
  return earth;
}