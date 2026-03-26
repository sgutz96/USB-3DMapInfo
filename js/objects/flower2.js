import * as THREE from 'three';

export function createFlower2(x, z) {
    const group = new THREE.Group();

    const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.5),
        new THREE.MeshStandardMaterial({ color: 0x27AE60 })
    );
    stem.position.y = 0.25;
    group.add(stem);

    const center = new THREE.Mesh(
        new THREE.SphereGeometry(0.12),
        new THREE.MeshStandardMaterial({ color: 0xF4D03F })
    );
    center.position.y = 0.5;
    group.add(center);

    for (let i = 0; i < 8; i++) {
        const petal = new THREE.Mesh(
            new THREE.SphereGeometry(0.18),
            new THREE.MeshStandardMaterial({ color: 0xFAD7A0 })
        );

        const angle = (i / 8) * Math.PI * 2;

        petal.scale.set(0.6, 1, 0.6);
        petal.position.set(
            Math.cos(angle) * 0.25,
            0.5,
            Math.sin(angle) * 0.25
        );

        group.add(petal);
    }

    group.position.set(x, 0, z);
    return group;
}