import * as THREE from 'three';
import { coefficientDiameter, coefficientOrbitalRotation, SOLAR_ROTATE_ITS_SELF } from './solar';
import marsTexture from '@models/mars.jpg';
import { orbitalRotation, rotationSpeed } from '../utils/math';

const MARS_SIZE = 3378 * 30; // scale instead of real x30
export const MARS_ROTATE_ITS_SELF = SOLAR_ROTATE_ITS_SELF * 25; // 1,1 days
export const MARS_START_POSITION = {
  X: 5.5,
  Y: 0,
  Z: 0,
};
const MARS_ORBITAL_ROTATION = 100000 / 687; // 687 days
export const MARS_SPEED = MARS_ORBITAL_ROTATION / coefficientOrbitalRotation;

export const marsMesh = () => {
  const texture = new THREE.TextureLoader().load(marsTexture);
  const geometry = new THREE.SphereGeometry(MARS_SIZE / coefficientDiameter, 32, 32);
  const material = new THREE.MeshLambertMaterial({ map: texture });
  const mars = new THREE.Mesh(geometry, material);
  mars.position.set(MARS_START_POSITION.X, 0, 0);
  return mars;
}

const newMarsPosition = orbitalRotation(MARS_SPEED, MARS_START_POSITION.X);
export const marsRotationAndMoving = (mars: THREE.Mesh): {position: THREE.Vector3, rotation: THREE.Euler} => {
  mars.rotation.z += rotationSpeed(MARS_ROTATE_ITS_SELF);
  const newMarsPos = newMarsPosition();
  mars.position.x = newMarsPos.x;
  mars.position.y = newMarsPos.y;
  return {position: mars.position, rotation: mars.rotation};
}