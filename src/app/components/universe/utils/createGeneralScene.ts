import * as THREE from 'three';
import nightSky from '@models/night-sky-2.jpg';
import { addPlanetToList } from './planet-list';

export const createScene = (): THREE.Scene => {
  const scene = new THREE.Scene();
  const nightSkyTexture = new THREE.TextureLoader().load(nightSky);
  scene.background = nightSkyTexture;
  return scene;
}

export const createCamera = (): THREE.PerspectiveCamera => {
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 20;
  return camera;
}

export const createRenderer = (): THREE.WebGLRenderer => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
} 

export const createLight = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
  const pointLight = new THREE.PointLight(0xffffff, 1.5, 0, 0);
  scene.add(ambientLight);
  scene.add(pointLight);
}

export const resizeWindow = (renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera) => {
  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}

export const addPlanetToScene = (scene: THREE.Scene, mesh: THREE.Mesh, name: string): THREE.Mesh => {
  scene.add(mesh);
  addPlanetToList(mesh.id, name);
  return mesh;
}

