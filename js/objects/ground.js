import * as THREE from 'three';

export function createGround() {
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(80, 80),
        new THREE.MeshStandardMaterial({
            color: 0x72F688,
            roughness: 0.9
        })
    );

    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;

    return ground;
}