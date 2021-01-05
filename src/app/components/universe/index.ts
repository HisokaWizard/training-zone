import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';

import './styles/styles.css';

import {
  addPlanetToScene,
  createCamera,
  createLight,
  createRenderer,
  createScene,
  resizeWindow
} from './utils/createGeneralScene';
import { earthMesh, earthRotationAndMoving } from './planets/earth';
import { mercuryMesh, mercuryRotationAndMoving } from './planets/mercury';
import { getUniforms, solarMesh, solarRotation } from './planets/solar';
import { venusMesh, venusRotationAndMoving } from './planets/venus';
import { addStopperBtn, sceneState } from './utils/scene-stopper';
import { createCard, planetInfoClick } from './utils/card';

const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();
const orbitalControl = new OrbitControls(camera, renderer.domElement);
createLight(scene);
resizeWindow(renderer, camera);
const clock = new THREE.Clock();
const uniforms = getUniforms();
const solar = addPlanetToScene(scene, solarMesh(uniforms), 'solar');
const mercury = addPlanetToScene(scene, mercuryMesh(), 'mercury');
const venus = addPlanetToScene(scene, venusMesh(), 'venus');
const earth = addPlanetToScene(scene, earthMesh(), 'earth');
//

const renderModel = new RenderPass(scene, camera);
const effectBloom = new BloomPass(1.25);
const effectFilm = new FilmPass(0.35, 0.95, 2048);
const composer = new EffectComposer(renderer);
composer.addPass(renderModel);
composer.addPass(effectBloom);
composer.addPass(effectFilm);

// game logic
const update = () => {
  const delta = 5 * clock.getDelta();
  uniforms.time.value += 0.2 * delta;
  renderer.clear();
  composer.render(0.01);

  if (!sceneState.stopAction) {
    solar.rotation.z = solarRotation(solar);
    //
    const mercuryDislocationChange = mercuryRotationAndMoving(mercury);
    mercury.position.x = mercuryDislocationChange.position.x;
    mercury.position.y = mercuryDislocationChange.position.y;
    mercury.rotation.z = mercuryDislocationChange.rotation.z;
    //
    const venusDislocationChange = venusRotationAndMoving(venus);
    venus.position.x = venusDislocationChange.position.x;
    venus.position.y = venusDislocationChange.position.y;
    venus.rotation.z = venusDislocationChange.rotation.z;
    //
    const earthDislocationChange = earthRotationAndMoving(earth);
    earth.position.x = earthDislocationChange.position.x;
    earth.position.y = earthDislocationChange.position.y;
    earth.rotation.z = earthDislocationChange.rotation.z;
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

// UI controls
addStopperBtn(sceneState);
createCard();

document.body.addEventListener('dblclick', (event) => planetInfoClick(event, scene, camera));