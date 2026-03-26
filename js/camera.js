import * as THREE from 'three';

// Estado interno de la cámara (privado del módulo)
let angle = Math.PI / 6;
const distance = 20;

export function createCamera(container) {
    const camera = new THREE.PerspectiveCamera(
        50,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );

    // Posición inicial
    updateCameraPosition(camera);

    return camera;
}

export function updateCameraOrbit(camera) {
    angle += 0.001; // velocidad de rotación

    updateCameraPosition(camera);
}

function updateCameraPosition(camera) {
    camera.position.set(
        distance * Math.cos(angle),
        distance * 0.8,
        distance * Math.sin(angle)
    );

    camera.lookAt(0, 0, 0);
}