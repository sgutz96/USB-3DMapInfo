import * as THREE from 'three';

const DISTANCE = 20;

/**
 * Creates and returns a perspective camera positioned at an isometric-like angle.
 * @param {HTMLElement} container
 * @returns {THREE.PerspectiveCamera}
 */
export function createCamera(container) {
  const camera = new THREE.PerspectiveCamera(
    50,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );

  const angle = Math.PI / 6;
  camera.position.set(
    DISTANCE * Math.cos(angle),
    DISTANCE * 0.8,
    DISTANCE * Math.sin(angle)
  );
  camera.lookAt(0, 0, 0);
  return camera;
}

/**
 * Advances the camera's orbit angle and updates its position.
 * Call this once per animation frame.
 *
 * @param {THREE.PerspectiveCamera} camera
 * @param {{ value: number }} angleRef  - mutable object holding the current angle
 */
export function orbitCamera(camera, angleRef) {
  angleRef.value += 0.001;
  camera.position.x = DISTANCE * Math.cos(angleRef.value);
  camera.position.z = DISTANCE * Math.sin(angleRef.value);
  camera.lookAt(0, 0, 0);
}
