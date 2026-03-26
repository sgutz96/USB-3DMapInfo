import * as THREE from 'three';

export function createFlower1(x, z) {
    const group = new THREE.Group();

    const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 0.45),
        new THREE.MeshStandardMaterial({ color: 0x2ECC71 })
    );
    stem.position.y = 0.225;
    group.add(stem);

    const center = new THREE.Mesh(
        new THREE.SphereGeometry(0.12),
        new THREE.MeshStandardMaterial({ color: 0xF7DC6F })
    );
    center.position.y = 0.45;
    group.add(center);

    for (let i = 0; i < 6; i++) {
        const petal = new THREE.Mesh(
            new THREE.SphereGeometry(0.13),
            new THREE.MeshStandardMaterial({ color: 0xFF7ABF })
        );

        const angle = (i / 6) * Math.PI * 2;

        petal.position.set(
            Math.cos(angle) * 0.2,
            0.45,
            Math.sin(angle) * 0.2
        );

        group.add(petal);
    }

    group.position.set(x, 0, z);
    return group;
}