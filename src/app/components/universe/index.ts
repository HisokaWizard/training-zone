import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
import { solarMesh, solarRotation } from './planets/solar';
import { venusMesh, venusRotationAndMoving } from './planets/venus';
import { addStopperBtn, sceneState } from './utils/scene-stopper';
import { createCard, planetInfoClick } from './utils/card';

const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();
const orbitalControl = new OrbitControls(camera, renderer.domElement);
createLight(scene);
resizeWindow(renderer, camera);
const solar = addPlanetToScene(scene, solarMesh(), 'solar');
const mercury = addPlanetToScene(scene, mercuryMesh(), 'mercury');
const venus = addPlanetToScene(scene, venusMesh(), 'venus');
const earth = addPlanetToScene(scene, earthMesh(), 'earth');

// game logic
const update = () => {
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