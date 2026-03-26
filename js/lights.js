import * as THREE from 'three';

export function createLights(scene) {

    // 🌤️ Luz ambiental suave
    const ambientLight = new THREE.AmbientLight(0xF4E4C1, 0.7);
    scene.add(ambientLight);

    // ☀️ Luz principal (sol)
    const sunLight = new THREE.DirectionalLight(0xFFE4B5, 0.8);
    sunLight.position.set(10, 15, 5);

    sunLight.castShadow = true;

    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;

    sunLight.shadow.camera.left = -15;
    sunLight.shadow.camera.right = 15;
    sunLight.shadow.camera.top = 15;
    sunLight.shadow.camera.bottom = -15;

    scene.add(sunLight);

    // 🌅 Luz de relleno
    const fillLight = new THREE.DirectionalLight(0xDEB887, 0.3);
    fillLight.position.set(-5, 5, -5);

    scene.add(fillLight);
}