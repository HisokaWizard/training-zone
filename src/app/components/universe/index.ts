import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import './styles/styles.css';

import {
  createCamera,
  createLight,
  createRenderer,
  createScene,
  zoomAndPosition,
  resizeWindow,
  initSolarSystem
} from './utils/createGeneralScene';
import { solarAnimationUpdate, } from './planets/solar';
import { addStopperBtn, btnForCard, btnForSolarSystem, sceneState } from './utils/scene-stopper';
import { backToSolarSystem, createCard, planetInfoClick } from './utils/card';
import { planetMoving } from './utils/planets-moving';
import { resetCamera } from './utils/alignPlanet';

export const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();
const orbitalControl = new OrbitControls(camera, renderer.domElement);
createLight(scene);
resizeWindow(renderer, camera);
const clock = new THREE.Clock();
export const solarSystem = initSolarSystem(scene);

// UI controls
const stopper = addStopperBtn(sceneState);
resetCamera(camera);
const backToSolar = backToSolarSystem(sceneState, scene, camera, renderer);
createCard();
document.body.addEventListener('dblclick', (event) => planetInfoClick(event, scene, camera));

// game logic
const update = () => {
  solarAnimationUpdate(clock);

  if (!sceneState.isSolarSystem) {
    btnForCard(stopper, backToSolar);
    return;
  }

  btnForSolarSystem(stopper, backToSolar);
  zoomAndPosition(camera);
  orbitalControl.target.set(0,0,0);
  
  if (!sceneState.stopAction) {
    planetMoving();
  }
}

// draw scene
const render = () => {
  orbitalControl.update();
  renderer.render(scene, camera);
}

// run game loop (update, render, repeat)
const gameLoop = () => {
  requestAnimationFrame(gameLoop);

  update();
  render();
}

gameLoop();