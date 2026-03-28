import * as THREE from 'three';

/**
 * Adds a cute cone-style pine tree at (x, z) to the scene.
 * @param {THREE.Scene} scene
 * @param {number} x
 * @param {number} z
 */
export function addCutePine(scene, x, z) {
  // Trunk
  const trunkGeo = new THREE.CylinderGeometry(0.15, 0.2, 1, 8);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.set(x, 0.5, z);
  scene.add(trunk);

  // Three cone layers
  const coneMats = [
    new THREE.MeshStandardMaterial({ color: 0x2ecc71 }),
    new THREE.MeshStandardMaterial({ color: 0x28b463 }),
    new THREE.MeshStandardMaterial({ color: 0x239b56 }),
  ];
  const heights = [1.1, 1.6, 2.0];

  heights.forEach((h, i) => {
    const coneGeo = new THREE.ConeGeometry(0.9 - i * 0.25, 0.8, 10);
    const cone = new THREE.Mesh(coneGeo, coneMats[i]);
    cone.position.set(x, h, z);
    scene.add(cone);
  });
}
