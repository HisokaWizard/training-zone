import * as THREE from 'three';
import lavaCloud from '@models/lava-cloud.png';
import lavaTile from '@models/lava-tile.jpg';
import { rotationSpeed } from '../utils/math';

const SOLAR_SIZE = 1392700;
export const SOLAR_ROTATE_ITS_SELF = 27; // days
export const coefficientDiameter = 1000000;
export const coefficientRotation = 10000;
export const coefficientOrbitalRotation = 1000;

export const solarMesh = (uniforms: any) => {
  const geometry = new THREE.SphereGeometry(SOLAR_SIZE / coefficientDiameter, 32, 32);
  const material = shaderMaterial(uniforms);
  const solar = new THREE.Mesh(geometry, material);
  solar.position.set(0, 0, 0);
  return solar;
}

const vertexShineShader = `
varying vec3 vNormal;
void main() {
  vNormal = normalize( normalMatrix * normal );
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;

const fragmentShineShader = `
varying vec3 vNormal;
void main() {
	float intensity = pow( 0.7 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), 5.0 ); 
  gl_FragColor = vec4( 1.0, 0.8, 0.2, 1.5 ) * intensity;
}`;

export const solarShineMesh = () => {
  const geometry = new THREE.SphereGeometry(SOLAR_SIZE / coefficientDiameter * 1.15, 32, 16);
  const material = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: vertexShineShader,
    fragmentShader: fragmentShineShader,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true
  });
  const shine = new THREE.Mesh(geometry, material);
  shine.position.set(0, 0, 0);
  return shine;
}

export const solarRotation = (solar: THREE.Mesh): number => {
  solar.rotation.z += rotationSpeed(SOLAR_ROTATE_ITS_SELF);
  return solar.rotation.z;
}

export const getUniforms = () => {
  const textureLoader = new THREE.TextureLoader();
  return {
    fogDensity: { value: 0.00005 },
    fogColor: { value: new THREE.Vector3(145, 78, 2) },
    time: { value: 2.5 },
    uvScale: { value: new THREE.Vector2(3, 3) },
    texture1: { value: textureLoader.load(lavaTile) },
    texture2: { value: textureLoader.load(lavaCloud) }
  }
};

const shaderMaterial = (uniforms: any): THREE.ShaderMaterial => {
  uniforms.texture1.value.wrapS = uniforms.texture1.value.wrapT = THREE.RepeatWrapping;
  uniforms.texture2.value.wrapS = uniforms.texture2.value.wrapT = THREE.RepeatWrapping;
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
  });
  return material;
}

const vertexShader = `
  uniform vec2 uvScale;
  varying vec2 vUv;
	void main() {
		vUv = uvScale * uv;
		vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
		gl_Position = projectionMatrix * mvPosition;
	}
`;
const fragmentShader = `
  uniform float time;
  uniform float fogDensity;
  uniform vec3 fogColor;
  uniform sampler2D texture1;
  uniform sampler2D texture2;
  varying vec2 vUv;
  void main( void ) {
  	vec2 position = - 1.0 + 2.0 * vUv;
  	vec4 noise = texture2D( texture1, vUv );
  	vec2 T1 = vUv + vec2( 1.5, - 1.5 ) * time * 0.02;
  	vec2 T2 = vUv + vec2( - 0.5, 2.0 ) * time * 0.01;
  	T1.x += noise.x * 2.0;
  	T1.y += noise.y * 2.0;
  	T2.x -= noise.y * 0.2;
  	T2.y += noise.z * 0.2;
  	float p = texture2D( texture1, T1 * 2.0 ).a;
  	vec4 color = texture2D( texture2, T2 * 2.0 );
  	vec4 temp = color * ( vec4( p, p, p, p ) * 1.0 ) + ( color * color - 0.05 );
  	if( temp.r > 1.0 ) { temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }
  	if( temp.g > 1.0 ) { temp.rb += temp.g - 1.0; }
  	if( temp.b > 1.0 ) { temp.rg += temp.b - 1.0; }
  	gl_FragColor = temp;
  	float depth = gl_FragCoord.z / gl_FragCoord.w;
  	const float LOG2 = 1.442695;
  	float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );
  	fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );
  	gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
  }
`;

