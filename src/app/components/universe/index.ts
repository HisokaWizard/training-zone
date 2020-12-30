import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import sun from '@models/sun.png';
import sun2 from '@models/sun2.jpg';
import sun3 from '@models/sun3.gif';
import sunVideo from '@models/sun-video-1.mov';
import { cardAboutPlanet } from './card';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

new OrbitControls(camera, renderer.domElement);
const pointLight = new THREE.PointLight(0xffffff, 2.0, 0, 0);
const point2 = new THREE.PointLight(0xffffff, 2.0, 0, 0);
point2.position.set(30, 20, -10);
scene.add(pointLight);
// scene.add(point2);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const videoCreation = (id: string, video: any): HTMLVideoElement => {
  const videoEl = document.createElement('video');
  videoEl.id = id;
  videoEl.src = video;
  videoEl.autoplay = true;
  videoEl.loop = true;
  videoEl.style.display = 'none';
  return videoEl;
}
const sunVideoEl = videoCreation('sun-light', sunVideo);
document.body.appendChild(sunVideoEl);

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

const texture = new THREE.TextureLoader().load(sun);
const texture_bonus = new THREE.VideoTexture(sunVideoEl);
const texture2 = new THREE.TextureLoader().load(sun2);
const texture3 = new THREE.TextureLoader().load(sun3);

const geometry = new THREE.SphereGeometry(4, 32, 32);
const material = new THREE.MeshBasicMaterial({ map: texture_bonus, wireframe: false });
const sphere = new THREE.Mesh(geometry, material);

const openSunCard = (event: MouseEvent) => {
  event.preventDefault();
  const sunVid= document.getElementById('sun-light');
  (sunVid as HTMLVideoElement).play();
  const sun = document.getElementById('sun');
  if (sun && sun.style.display !== 'none') {
    sun.style.display = 'none';
  } else if (sun && sun.style.display === 'none') {
    sun.style.display = 'block';
  } else {
    const card = cardAboutPlanet('sun');
    document.body.appendChild(card);
  }
};

document.addEventListener('dblclick', openSunCard);

scene.add(sphere);

const geometry2 = new THREE.SphereGeometry(1, 32, 32);
const material2 = new THREE.MeshStandardMaterial({ map: texture, wireframe: false });
const sphere2 = new THREE.Mesh(geometry2, material2);
sphere2.position.x = 10;
sphere2.position.z = 6;
scene.add(sphere2);

const geometry3 = new THREE.SphereGeometry(1.5, 32, 32);
const material3 = new THREE.MeshLambertMaterial({ map: texture2 });
const sphere3 = new THREE.Mesh(geometry3, material3);
sphere3.position.x = -10;
sphere3.position.y = 4;
scene.add(sphere3);

camera.position.z = 20;

// game logic
const update = () => {
  sphere3.rotation.z += 0.005;
  sphere2.rotation.z += 0.01;
  camera.rotation.z += 0.001;
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
