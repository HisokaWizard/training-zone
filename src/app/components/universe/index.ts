import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import './styles/styles.css';

import {
  addPlanetToScene,
  createCamera,
  createLight,
  createRenderer,
  createScene,
  zoomAndPosition,
  resizeWindow
} from './utils/createGeneralScene';
import { earthMesh } from './planets/earth';
import { mercuryMesh } from './planets/mercury';
import { getUniforms, solarMesh, solarShineMesh } from './planets/solar';
import { venusMesh } from './planets/venus';
import { addStopperBtn, sceneState } from './utils/scene-stopper';
import { createCard, planetInfoClick, PlanetNames } from './utils/card';
import { jupiterMesh } from './planets/jupiter';
import { saturnMesh, saturnRingsMesh } from './planets/saturn';
import { uranusMesh } from './planets/uranus';
import { neptuneMesh } from './planets/neptune';
import { planetMoving } from './utils/planets-moving';
import { marsMesh } from './planets/mars';
import { resetCamera } from './utils/alignPlanet';

const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();
const orbitalControl = new OrbitControls(camera, renderer.domElement);
createLight(scene);
resizeWindow(renderer, camera);
const clock = new THREE.Clock();
const uniforms = getUniforms();
export const solarShine = addPlanetToScene(scene, solarShineMesh(), PlanetNames.solar);
export const solar = addPlanetToScene(scene, solarMesh(uniforms), PlanetNames.solar);
export const mercury = addPlanetToScene(scene, mercuryMesh(), PlanetNames.mercury);
export const venus = addPlanetToScene(scene, venusMesh(), PlanetNames.venus);
export const earth = addPlanetToScene(scene, earthMesh(), PlanetNames.earth);
export const mars = addPlanetToScene(scene, marsMesh(), PlanetNames.mars);
export const jupiter = addPlanetToScene(scene, jupiterMesh(), PlanetNames.jupiter);
export const saturn = addPlanetToScene(scene, saturnMesh(), PlanetNames.saturn);
export const saturnRing = addPlanetToScene(scene, saturnRingsMesh(), PlanetNames.saturn);
export const uranus = addPlanetToScene(scene, uranusMesh(), PlanetNames.uranus);
export const neptune = addPlanetToScene(scene, neptuneMesh(), PlanetNames.neptune);
//

// game logic
const update = () => {
  zoomAndPosition(camera);
  orbitalControl.target.set(0,0,0);
  const delta = 5 * clock.getDelta();
  uniforms.time.value += 0.5 * delta;

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

// UI controls
addStopperBtn(sceneState);
resetCamera(camera);
createCard();

document.body.addEventListener('dblclick', (event) => planetInfoClick(event, scene, camera));