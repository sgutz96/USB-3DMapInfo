import * as THREE from 'three';

export function createPine(x, z) {
    const group = new THREE.Group();

    const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.2, 1, 8),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );

    trunk.position.y = 0.5;
    group.add(trunk);

    const heights = [1.1, 1.6, 2.0];

    heights.forEach((h, i) => {
        const cone = new THREE.Mesh(
            new THREE.ConeGeometry(0.9 - i * 0.25, 0.8, 10),
            new THREE.MeshStandardMaterial({
                color: 0x2ECC71 - i * 0x003300
            })
        );

        cone.position.y = h;
        group.add(cone);
    });

    group.position.set(x, 0, z);
    return group;
}