import * as THREE from 'three';

export function createTree(x, z) {
    const group = new THREE.Group();

    const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.35, 1.8, 6),
        new THREE.MeshStandardMaterial({ color: 0x8B5A2B })
    );

    trunk.position.y = 0.9;
    trunk.castShadow = true;
    group.add(trunk);

    const colors = [0x7FB77E, 0x6FB06D, 0x5DAA5A];
    const sizes = [1.1, 0.9, 0.7];
    const heights = [1.8, 2.4, 2.9];

    for (let i = 0; i < 3; i++) {
        const crown = new THREE.Mesh(
            new THREE.SphereGeometry(sizes[i], 10, 10),
            new THREE.MeshStandardMaterial({ color: colors[i] })
        );

        crown.position.y = heights[i];
        crown.castShadow = true;

        group.add(crown);
    }

    group.position.set(x, 0, z);
    return group;
}