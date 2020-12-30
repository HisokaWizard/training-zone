import * as THREE from 'three';
import { coefficientDiameter, coefficientOrbitalRotation, SOLAR_ROTATE_ITS_SELF } from './solar';
import mercuryTexture from '@models/mercury.jpeg';

const MERCURY_SIZE = 2439 * 50; // scale instead of real x50
export const MERCURY_ROTATE_ITS_SELF = SOLAR_ROTATE_ITS_SELF / 2.2; // 59 days
export const MERCURY_START_POSITION = {
  X: 2,
  Y: 0,
  Z: 0,
};
const MERCURY_ORBITAL_ROTATION = 100000 / 89; // 89 days
export const MERCURY_SPEED = MERCURY_ORBITAL_ROTATION / coefficientOrbitalRotation;

export const mercuryMesh = () => {
  const texture = new THREE.TextureLoader().load(mercuryTexture);
  const geometry = new THREE.SphereGeometry(MERCURY_SIZE / coefficientDiameter, 32, 32);
  const material = new THREE.MeshLambertMaterial({ map: texture, wireframe: false });
  const mercury = new THREE.Mesh(geometry, material);
  mercury.position.set(MERCURY_START_POSITION.X, 0, 0);
  return mercury;
}