import * as THREE from 'three';

/**
 * Adds a cute pink 6-petal flower at (x, z) to the scene.
 * @param {THREE.Scene} scene
 * @param {number} x
 * @param {number} z
 */
export function addFlower1(scene, x, z) {
  // Stem
  const stemGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.45, 6);
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71 });
  const stem = new THREE.Mesh(stemGeo, stemMat);
  stem.position.set(x, 0.225, z);
  scene.add(stem);

  // Center
  const centerGeo = new THREE.SphereGeometry(0.12, 10, 10);
  const centerMat = new THREE.MeshStandardMaterial({ color: 0xf7dc6f });
  const center = new THREE.Mesh(centerGeo, centerMat);
  center.position.set(x, 0.45, z);
  scene.add(center);

  // 6 petals
  const petalGeo = new THREE.SphereGeometry(0.13, 10, 10);
  const petalMat = new THREE.MeshStandardMaterial({ color: 0xff7abf });
  const step = (Math.PI * 2) / 6;

  for (let i = 0; i < 6; i++) {
    const angle = i * step;
    const petal = new THREE.Mesh(petalGeo, petalMat);
    petal.position.set(x + Math.cos(angle) * 0.2, 0.45, z + Math.sin(angle) * 0.2);
    scene.add(petal);
  }
}
