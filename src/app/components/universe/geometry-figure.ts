import * as THREE from 'three';
import { TextGeometryParameters } from 'three';

export const cube = () => {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ccdd });
  return new THREE.Mesh(geometry, material);
}

export const line = () => {
  const material = new THREE.LineBasicMaterial( { color: 0xdd00cc } );
  const points = [];
  points.push( new THREE.Vector3( 0, 0, 0 ) );
  points.push( new THREE.Vector3( 3, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 0, 0 ) );
  points.push( new THREE.Vector3( 0, 3, 0 ) );
  points.push( new THREE.Vector3( 0, 0, 0 ) );
  points.push( new THREE.Vector3( -1.5, -1.5, 1.5 ) );

  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  return new THREE.Line( geometry, material );
}

export const textGeometry = (text: string) => {
  const loader = new THREE.FontLoader();
  return loader.loadAsync('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json').then(font => {
    const params: TextGeometryParameters = {
      font: font,
      size: 0.3,
      height: 0.5,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.05,
      bevelSegments: 3
    };
    const text3D = new THREE.TextGeometry(text, params);
    text3D.center();
    const material = new THREE.MeshBasicMaterial({ color: 0xdf56a2 });
    return Promise.resolve(new THREE.Mesh(text3D, material));
  }).catch(error => console.error(error));
}