import * as THREE from 'three';
import { coefficientDiameter, coefficientOrbitalRotation, SOLAR_ROTATE_ITS_SELF } from './solar';
import saturnTexture from '@models/saturn.jpg';
import saturnRingTexture from '@models/saturn_ring.jpg';
import { orbitalRotation, PlanetMovingConfig } from '../utils/math';

const SATURN_SIZE = 60268 * 5; // scale instead of real x5
export const SATURN_START_POSITION = {
  X: 9.5,
  Y: 0,
  Z: 0,
};
const SATURN_ORBITAL_ROTATION = 100000 / 10747; // 10747 days

export const saturnConfig: PlanetMovingConfig = {
  selfRotate: SOLAR_ROTATE_ITS_SELF * 46, // ~ 10.5 hours
  orbitalRotation: orbitalRotation(SATURN_ORBITAL_ROTATION / coefficientOrbitalRotation, SATURN_START_POSITION.X),
}

export const saturnMesh = () => {
  const texture = new THREE.TextureLoader().load(saturnTexture);
  const geometry = new THREE.SphereGeometry(SATURN_SIZE / coefficientDiameter, 32, 32);
  const material = new THREE.MeshLambertMaterial({ map: texture, wireframe: false });
  const saturn = new THREE.Mesh(geometry, material);
  saturn.position.set(SATURN_START_POSITION.X, 0, 0);
  return saturn;
}

export const saturnRingsMesh = () => {
  const texture = new THREE.TextureLoader().load(saturnRingTexture);
  const saturnSize = SATURN_SIZE / coefficientDiameter;
  const geometry = new THREE.RingGeometry(saturnSize + 0.1, saturnSize + 0.35, 320, 50);
  const material = new THREE.MeshLambertMaterial({ map: texture, wireframe: true, transparent: false });
  const saturnRing = new THREE.Mesh(geometry, material);
  saturnRing.position.set(SATURN_START_POSITION.X, 0, 0);
  return saturnRing;
}
