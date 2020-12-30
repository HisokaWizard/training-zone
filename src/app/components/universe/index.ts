import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { earthMesh, EARTH_ROTATE_ITS_SELF, EARTH_SPEED, EARTH_START_POSITION } from './planets/earth';
import { mercuryMesh, MERCURY_ROTATE_ITS_SELF, MERCURY_SPEED, MERCURY_START_POSITION} from './planets/mercury';
import { solarMesh, SOLAR_ROTATE_ITS_SELF } from './planets/solar';
import { venusMesh, VENUS_ROTATE_ITS_SELF, VENUS_SPEED, VENUS_START_POSITION } from './planets/venus';
import { orbitalRotation, rotationSpeed } from './utils/math';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

new OrbitControls(camera, renderer.domElement);
const pointLight = new THREE.PointLight(0xffffff, 3.0, 0, 0);
scene.add(pointLight);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

const solar = solarMesh();
const mercury = mercuryMesh();
const newMercuryPosition = orbitalRotation(MERCURY_SPEED, MERCURY_START_POSITION.X);
const venus = venusMesh();
const newVenusPosition = orbitalRotation(VENUS_SPEED, VENUS_START_POSITION.X);
const earth = earthMesh();
const newEarthPosition = orbitalRotation(EARTH_SPEED, EARTH_START_POSITION.X);

scene.add(solar);
scene.add(mercury);
scene.add(venus);
scene.add(earth);

camera.position.z = 20;

// game logic
const update = () => {
  solar.rotation.z += rotationSpeed(SOLAR_ROTATE_ITS_SELF);
  //
  mercury.rotation.z += rotationSpeed(MERCURY_ROTATE_ITS_SELF);
  const newMercuryPos = newMercuryPosition();
  mercury.position.x = newMercuryPos.x;
  mercury.position.y = newMercuryPos.y;
  //
  venus.rotation.z += rotationSpeed(VENUS_ROTATE_ITS_SELF);
  const newVenusPos = newVenusPosition();
  venus.position.x = newVenusPos.x;
  venus.position.y = newVenusPos.y;
  //
  earth.rotation.z += rotationSpeed(EARTH_ROTATE_ITS_SELF);
  const newEarthPos = newEarthPosition();
  earth.position.x = newEarthPos.x;
  earth.position.y = newEarthPos.y;
}

// draw scene
const render = () => {
  renderer.render(scene, camera);
}

// run game loop (update, render, repeat)
const gameLoop = () => {
  requestAnimationFrame(gameLoop);

  update();
  render();
}

gameLoop();
