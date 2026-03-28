import * as THREE from 'three';

/**
 * Adds a cute round tree at (x, z) to the scene.
 * @param {THREE.Scene} scene
 * @param {number} x
 * @param {number} z
 */
export function addTree(scene, x, z) {
  // Trunk
  const trunkGeo = new THREE.CylinderGeometry(0.25, 0.35, 1.8, 6);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b });
  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.set(x, 0.9, z);
  trunk.castShadow = true;
  scene.add(trunk);

  // Three layered crown spheres
  const crownColors = [0x7fb77e, 0x6fb06d, 0x5daa5a];
  const sizes       = [1.1, 0.9, 0.7];
  const heights     = [1.8, 2.4, 2.9];

  for (let i = 0; i < 3; i++) {
    const crownGeo = new THREE.SphereGeometry(sizes[i], 10, 10);
    const crownMat = new THREE.MeshStandardMaterial({ color: crownColors[i], roughness: 0.8 });
    const crown = new THREE.Mesh(crownGeo, crownMat);
    crown.position.set(x, heights[i], z);
    crown.castShadow = true;
    scene.add(crown);
  }

  // Texture bumps
  const bumpGeo = new THREE.SphereGeometry(0.25, 10, 10);
  const bumpMat = new THREE.MeshStandardMaterial({ color: 0x74c17e });

  [
    [0.5, 2.2, 0.2],
    [-0.4, 2.6, -0.3],
    [0.3, 2.0, -0.4],
  ].forEach(([dx, h, dz]) => {
    const bump = new THREE.Mesh(bumpGeo, bumpMat);
    bump.position.set(x + dx, h, z + dz);
    bump.castShadow = true;
    scene.add(bump);
  });
}
