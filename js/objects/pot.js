import * as THREE from 'three';

/**
 * Adds a cute terracotta pot with a round plant at (x, z) to the scene.
 * @param {THREE.Scene} scene
 * @param {number} x
 * @param {number} z
 */
export function addCutePot(scene, x, z) {
  // Pot
  const potGeo = new THREE.CylinderGeometry(0.35, 0.45, 0.45, 12);
  const potMat = new THREE.MeshStandardMaterial({ color: 0xd35400 });
  const pot = new THREE.Mesh(potGeo, potMat);
  pot.position.set(x, 0.225, z);
  scene.add(pot);

  // Main plant sphere
  const plantGeo = new THREE.SphereGeometry(0.45, 12, 12);
  const plantMat = new THREE.MeshStandardMaterial({ color: 0x58d68d });
  const plant = new THREE.Mesh(plantGeo, plantMat);
  plant.position.set(x, 0.6, z);
  scene.add(plant);

  // Two leaf bumps
  const leafGeo = new THREE.SphereGeometry(0.2, 10, 10);
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71 });

  [-0.2, 0.2].forEach((dx) => {
    const leaf = new THREE.Mesh(leafGeo, leafMat);
    leaf.scale.set(1, 0.6, 1);
    leaf.position.set(x + dx, 0.7, z);
    scene.add(leaf);
  });
}
