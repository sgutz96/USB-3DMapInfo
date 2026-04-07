// js/scene.js
// Builds the Three.js scene, renderer, and populates all 3-D objects.

import * as THREE from 'three';
import { setupLights }  from './lights.js';
import { createGround } from './objects/ground.js';
import { createTower }  from './objects/tower.js';
import { addTree }      from './objects/tree.js';
import { addCutePine }  from './objects/pine.js';
import { addFlower1 }   from './objects/flower1.js';
import { addFlower2 }   from './objects/flower2.js';
import { addCutePot }   from './objects/pot.js';
import { createGltfModel } from './objects/gltfModel.js';

import { topics }       from './data/topics.js';
import { topicModels }     from './data/topicModels.js';

import { showPanel }    from './ui/panel.js';

export let scene, renderer;
export const clickableCubes = [];

/**
 * Initialises the Three.js scene and attaches the canvas to `container`.
 * @param {THREE.PerspectiveCamera} camera
 * @param {HTMLElement} container
 */
export function initScene(camera, container) {
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xb7c5e8);
  scene.fog = new THREE.Fog(0xb7c5e8, 10, 50);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Lights & ground
  setupLights(scene);
  createGround(scene);

  // Topic buildings
  topics.forEach((topic) => {
    //const cube = createTower(scene, topic);
    //clickableCubes.push(cube);
  });


  // Topic Models buildings
topicModels.forEach((data) => {
  const group = createGltfModel(scene, data);
  clickableCubes.push(group);   // si quieres que también abran el panel al hacer clic
});

/*

  // Vegetation – trees
  const treePositions = [
    [-15, 0], [-12, 5], [-9, 2], [-4, 0], [-3, -3],
    [10, 7],  [3, -1],  [1, -10], [-3, -8], [7, 0],
    [-1, 8],  [0, 0],   [5, 10],  [-8, 11], [5, -12],
  ];
  treePositions.forEach(([x, z]) => addTree(scene, x, z));

  // Pine trees
  const pinePositions = [
    [5, 0],   [10, 5],  [10, 1],  [8, 3],   [10, 9],
    [7, 12],  [5, 13],  [3, 15],  [-5, 10],
    [-10, -10], [-12, -11], [-11, -13],
    [10, -10],  [12, -11],  [11, -13],
  ];
  pinePositions.forEach(([x, z]) => addCutePine(scene, x, z));

  // Pots along a path
  const potPositions = [
    [-2, 5.5], [-2, 3.5], [-2, 1.5], [1.5, -8], [1.5, -7],
  ];
  potPositions.forEach(([x, z]) => addCutePot(scene, x, z));

  // Scattered flowers
  for (let i = 0; i < 20; i++) {
    addFlower1(scene, rand(), rand());
  }
  for (let i = 0; i < 30; i++) {
    addFlower2(scene, rand(), rand());
  }
*/
  // Click handler
  renderer.domElement.addEventListener('click', (event) => {
    _onMouseClick(event, camera);
  });
}


/** Random position in the –20 to 20 range. */
function rand() {
  return Math.random() * 40 - 20;
}

function _onMouseClick(event, camera) {
  const rect  = renderer.domElement.getBoundingClientRect();
  const mouse = new THREE.Vector2(
    ((event.clientX - rect.left) / rect.width)  *  2 - 1,
    -((event.clientY - rect.top)  / rect.height) *  2 + 1
  );

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(clickableCubes);

  if (hits.length > 0) {
    showPanel(hits[0].object.userData);
  }
}
