import * as THREE from 'three';

/**
 * Adds a cute peach 8-petal oval flower at (x, z) to the scene.
 * @param {THREE.Scene} scene
 * @param {number} x
 * @param {number} z
 */
export function addFlower2(scene, x, z) {
  // Stem
  const stemGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 6);
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x27ae60 });
  const stem = new THREE.Mesh(stemGeo, stemMat);
  stem.position.set(x, 0.25, z);
  scene.add(stem);

  // Center
  const centerGeo = new THREE.SphereGeometry(0.12, 10, 10);
  const centerMat = new THREE.MeshStandardMaterial({ color: 0xf4d03f });
  const center = new THREE.Mesh(centerGeo, centerMat);
  center.position.set(x, 0.5, z);
  scene.add(center);

  // 8 oval petals
  const petalGeo = new THREE.SphereGeometry(0.18, 10, 10);
  const petalMat = new THREE.MeshStandardMaterial({ color: 0xfad7a0 });
  const step = (Math.PI * 2) / 8;

  for (let i = 0; i < 8; i++) {
    const angle = i * step;
    const petal = new THREE.Mesh(petalGeo, petalMat);
    petal.scale.set(0.6, 1, 0.6);
    petal.position.set(x + Math.cos(angle) * 0.25, 0.5, z + Math.sin(angle) * 0.25);
    scene.add(petal);
  }
}
