import * as THREE from 'three';

/**
 * Adds ambient, sun directional, and fill directional lights to the scene.
 * @param {THREE.Scene} scene
 */
export function setupLights(scene) {
  const ambient = new THREE.AmbientLight(0xf4e4c1, 0.7);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xffe4b5, 0.8);
  sun.position.set(10, 15, 5);
  sun.castShadow = true;
  sun.shadow.mapSize.width  = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.left   = -15;
  sun.shadow.camera.right  =  15;
  sun.shadow.camera.top    =  15;
  sun.shadow.camera.bottom = -15;
  scene.add(sun);

  const fill = new THREE.DirectionalLight(0xdeb887, 0.3);
  fill.position.set(-5, 5, -5);
  scene.add(fill);
}
