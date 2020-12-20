import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { cube, line, textGeometry } from './geometry-figure';

export const GraphicContainer = () => {
  const containerRef: React.MutableRefObject<HTMLDivElement> = useRef();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer( { antialias: true } );
  const controls = new OrbitControls( camera, renderer.domElement );
  const cube1 = cube();
  const line1 = line();
  const text1 = textGeometry('This is rotating cube! Fuck yee!!!');

  useEffect(() => {
    generalScene();
  }, [])

  const generalScene = () => {
    renderer.setSize(innerWidth, innerHeight, true);
    renderer.setClearColor('#151619')
    containerRef.current.appendChild(renderer.domElement);
    scene.add(cube1);
    scene.add(line1);
    text1.then(textToScene => textToScene && scene.add(textToScene));
    camera.position.set(0, 5, 10);
    animate();
  }

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
		renderer.render(scene, camera);
  }

  return (
    <div id='universe' ref={containerRef}></div>
  )
}