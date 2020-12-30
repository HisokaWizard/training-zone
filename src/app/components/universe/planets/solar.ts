import * as THREE from 'three';
import sun from '@models/sun.jpg';
import sun2 from '@models/sun2.jpg';

const SOLAR_SIZE = 1392700;
export const SOLAR_ROTATE_ITS_SELF = 27; // days
export const coefficientDiameter = 1000000;
export const coefficientRotation = 10000;
export const coefficientOrbitalRotation = 1000;

export const solarMesh = () => {
  const texture = new THREE.TextureLoader().load(sun);
  const geometry = new THREE.SphereGeometry(SOLAR_SIZE / coefficientDiameter, 32, 32);
  const material = new THREE.MeshBasicMaterial({ map: texture, wireframe: false });
  const solar = new THREE.Mesh(geometry, material);
  solar.position.set(0, 0, 0);
  return solar;
}