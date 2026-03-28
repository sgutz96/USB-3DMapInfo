import * as THREE from 'three';

/**
 * Creates and adds the grass ground plane + college floor texture to the scene.
 * @param {THREE.Scene} scene
 */
export function createGround(scene) {
  // Large grass ground
  const groundGeo = new THREE.PlaneGeometry(80, 80);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x72f688,
    roughness: 0.9,
    metalness: 0.1,
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // School floor with custom texture
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('Textures/USB-Map.jpeg');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);

  var Sca = 2; // Escala para ajustar el tamaño del piso
  const pisGeo = new THREE.PlaneGeometry(16*Sca, 9*Sca);
  const pisMat = new THREE.MeshStandardMaterial({ map: texture, alphaTest: 0.9 });
  const piso = new THREE.Mesh(pisGeo, pisMat);
  piso.rotation.x = -Math.PI / 2;
  piso.position.y = 0.01;
  scene.add(piso);
}
