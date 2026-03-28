import * as THREE from 'three';

/**
 * Creates a building mesh for a topic and adds it to the scene.
 * Returns the clickable cube mesh (with userData set to the topic).
 *
 * @param {THREE.Scene} scene
 * @param {Object} topic  - a topic object from topics.js
 * @returns {THREE.Mesh}  - the main body cube (used for raycasting)
 */
export function createTower(scene, topic) {
  const [sx, sy, sz] = topic.scale;
  const [px, py, pz] = topic.position;

  // Body
  const bodyGeo = new THREE.BoxGeometry(sx, sy, sz);
  const bodyMat = new THREE.MeshStandardMaterial({
    color: topic.color,
    roughness: 0.7,
    metalness: 0.2,
  });
  const cube = new THREE.Mesh(bodyGeo, bodyMat);
  cube.position.set(px, py, pz);
  cube.castShadow = true;
  cube.receiveShadow = true;
  cube.userData = topic;
  scene.add(cube);

  // Roof
  const roofGeo = new THREE.BoxGeometry(sx + 0.2, 0.3, sz + 0.2);
  const roofMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(topic.color).multiplyScalar(0.6),
    roughness: 0.8,
  });
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.set(px, py + sy / 2 + 0.15, pz);
  roof.castShadow = true;
  scene.add(roof);

  // Windows (front face, two per building)
  const winGeo = new THREE.BoxGeometry(0.4, 0.5, 0.1);
  const winMat = new THREE.MeshStandardMaterial({
    color: 0x4a4a4a,
    emissive: 0xffe4b5,
    emissiveIntensity: 0.3,
  });

  for (let i = 0; i < 2; i++) {
    const win = new THREE.Mesh(winGeo, winMat);
    win.position.set(
      px + (i - 0.5) * sx * 0.4,
      py + sy * 0.2,
      pz + sz / 2 + 0.05
    );
    scene.add(win);
  }

  return cube;
}
