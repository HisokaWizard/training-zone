import * as THREE from 'three';
import {
  earthInfo,
  jupiterInfo,
  marsInfo,
  mercuryInfo,
  neptuneInfo,
  PlanetInformation,
  saturnInfo,
  solarInfo,
  uranusInfo,
  venusInfo,
} from './info-about-planet';
import { getPlanetList, PlanetMap } from './planet-list';
import closeBtnImg from '@models/close-yellow.svg';

export enum PlanetNames {
  solar = 'solar',
  mercury = 'mercury',
  venus = 'venus',
  earth = 'earth',
  mars = 'mars',
  jupiter = 'jupiter',
  saturn = 'saturn',
  uranus = 'uranus',
  neptune = 'neptune',
}

export const createCard = () => {
  const card = document.createElement('div');
  card.id = 'planet-card';
  card.style.display = 'none';
  document.body.appendChild(card);
}

const imageElement = (image: any): HTMLImageElement => {
  const img = document.createElement('img');
  img.classList.add('image-card');
  img.src = image;
  return img;
}

const textElement = (content: string): HTMLDivElement => {
  const text = document.createElement('div');
  text.classList.add('text-card');
  text.textContent = content;
  return text;
}

const closeBtnElement = (): HTMLDivElement => {
  const closeBtn = document.createElement('img');
  closeBtn.src = closeBtnImg;
  closeBtn.classList.add('close-btn-card');
  closeBtn.addEventListener('click', (event: MouseEvent) => {
    const card = document.getElementById('planet-card');
    card.style.display = 'none';
  });
  return closeBtn;
}

export const planetCardInfo = (info: PlanetInformation) => {
  const card = document.getElementById('planet-card');
  while (card.firstChild) {
    card.removeChild(card.lastChild);
  }
  card.style.display = 'flex';
  card.classList.add('card-container');
  const img = imageElement(info.image);
  const text = textElement(info.content);
  const closeBtn = closeBtnElement();
  card.appendChild(img);
  card.appendChild(text);
  card.appendChild(closeBtn);
}

export const convertCoordsToTheVector = (event: MouseEvent, camera: THREE.PerspectiveCamera): THREE.Raycaster => {
  const mouse = new THREE.Vector2((event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1);
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  return raycaster;
}

const planetCardSelect = (planet: PlanetMap) => {
  switch (planet.name) {
    case PlanetNames.solar:
      planetCardInfo(solarInfo);
      break;
    case PlanetNames.mercury:
      planetCardInfo(mercuryInfo);
      break;
    case PlanetNames.venus:
      planetCardInfo(venusInfo);
      break;
    case PlanetNames.earth:
      planetCardInfo(earthInfo);
      break;
    case PlanetNames.mars:
      planetCardInfo(marsInfo);
      break;
    case PlanetNames.jupiter:
      planetCardInfo(jupiterInfo);
      break;
    case PlanetNames.saturn:
      planetCardInfo(saturnInfo);
      break;
    case PlanetNames.uranus:
      planetCardInfo(uranusInfo);
      break;
    case PlanetNames.neptune:
      planetCardInfo(neptuneInfo);
      break;
  }
}

export const planetInfoClick = (event: MouseEvent, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
  event.preventDefault();
  const raycaster = convertCoordsToTheVector(event, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    const planet3D = intersects[0].object;
    getPlanetList().forEach(planet => {
      if (planet.id === planet3D.id) {
        planetCardSelect(planet);
      }
    });
  }
}