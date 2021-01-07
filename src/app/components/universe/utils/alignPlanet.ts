import * as THREE from 'three';
import { START_CAMERA_POSITION_Z } from './createGeneralScene';

export const resetCameraPosition = (event: MouseEvent, camera: THREE.PerspectiveCamera) => {
  camera.position.set(0, 0, START_CAMERA_POSITION_Z);
}

export const resetCamera = (camera: THREE.PerspectiveCamera) => {
  const btnElement = document.createElement('button');
  btnElement.classList.add('reset-camera');
  btnElement.textContent = 'Reset camera position';
  btnElement.addEventListener('click', (event) => resetCameraPosition(event, camera));
  document.body.appendChild(btnElement);
}

