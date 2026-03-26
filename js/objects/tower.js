import * as THREE from 'three';

export function createTower(topic) {
    const group = new THREE.Group();

    // Cubo principal
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(...topic.scale),
        new THREE.MeshStandardMaterial({
            color: topic.color,
            roughness: 0.7,
            metalness: 0.2
        })
    );

    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.userData = topic;

    group.add(cube);

    // Techo
    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(
            topic.scale[0] + 0.2,
            0.3,
            topic.scale[2] + 0.2
        ),
        new THREE.MeshStandardMaterial({
            color: new THREE.Color(topic.color).multiplyScalar(0.6)
        })
    );

    roof.position.y = topic.scale[1] / 2 + 0.15;
    group.add(roof);

    // Ventanas
    const windowGeom = new THREE.BoxGeometry(0.4, 0.5, 0.1);
    const windowMat = new THREE.MeshStandardMaterial({
        color: 0x4A4A4A,
        emissive: 0xFFE4B5,
        emissiveIntensity: 0.3
    });

    for (let i = 0; i < 2; i++) {
        const w = new THREE.Mesh(windowGeom, windowMat);

        w.position.set(
            (i - 0.5) * topic.scale[0] * 0.4,
            topic.scale[1] * 0.2,
            topic.scale[2] / 2 + 0.05
        );

        group.add(w);
    }

    group.position.set(...topic.position);

    return {
        group,
        clickable: cube
    };
}