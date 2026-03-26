import * as THREE from 'three';

export function createScene() {
    const scene = new THREE.Scene();

    // Color base (tu estilo pastel)
    const bgColor = 0xB7C5E8;

    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.Fog(bgColor, 10, 50);

    return scene;
}