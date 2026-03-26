import * as THREE from 'three';

// CORE
import { createScene } from './scene.js';
import { createCamera, updateCameraOrbit } from './camera.js';
import { createLights } from './lights.js';

// DATA
import { topics } from './data/topics.js';

// OBJECTS
import { createTower } from './objects/tower.js';
import { createTree } from './objects/tree.js';
import { createPine } from './objects/pine.js';
import { createFlower1 } from './objects/flower1.js';
import { createFlower2 } from './objects/flower2.js';
import { createGround } from './objects/ground.js';

// UI
import { showPanel, closePanel } from './ui/panel.js';
import {
    openModal,
    closeModal,
    nextSlide,
    prevSlide
} from './ui/modal.js';

// =========================
// VARIABLES
// =========================
let scene, camera, renderer;
let clickableObjects = [];

let currentTopic = null;

// =========================
// INIT
// =========================
init();

function init() {
    const container = document.getElementById('canvas-container');

    // SCENE
    scene = createScene();

    // CAMERA
    camera = createCamera(container);

    // RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;

    container.appendChild(renderer.domElement);

    // LIGHTS
    createLights(scene);

    // GROUND
    const ground = createGround();
    scene.add(ground);

    // =========================
    // TORRES (CLICKABLES)
    // =========================
    topics.forEach(topic => {
        const { group, clickable } = createTower(topic);
        scene.add(group);
        clickableObjects.push(clickable);
    });

    // =========================
    // DECORACIÓN
    // =========================
    populateEnvironment();

    // =========================
    // EVENTS
    // =========================
    renderer.domElement.addEventListener('click', onClick);
    window.addEventListener('resize', () => onResize(container));

    // UI GLOBAL (para HTML)
    window.closePanel = closePanel;
    window.openModal = () => openModal(currentTopic);
    window.closeModal = closeModal;
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    document.getElementById('loading').style.display = 'none';

    animate();
}

// =========================
// AMBIENTE
// =========================
function populateEnvironment() {
    // Árboles
    for (let i = 0; i < 15; i++) {
        scene.add(createTree(rand(), rand()));
    }

    // Pinos
    for (let i = 0; i < 10; i++) {
        scene.add(createPine(rand(), rand()));
    }

    // Flores
    for (let i = 0; i < 25; i++) {
        scene.add(createFlower1(rand(), rand()));
    }

    for (let i = 0; i < 35; i++) {
        scene.add(createFlower2(rand(), rand()));
    }
}

// =========================
// INTERACCIÓN
// =========================
function onClick(event) {
    const rect = renderer.domElement.getBoundingClientRect();

    const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(clickableObjects);

    if (intersects.length > 0) {
        currentTopic = intersects[0].object.userData;
        showPanel(currentTopic);
    }
}

// =========================
// RESIZE
// =========================
function onResize(container) {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

// =========================
// LOOP
// =========================
function animate() {
    requestAnimationFrame(animate);

    // cámara orbit automática
    updateCameraOrbit(camera);

    renderer.render(scene, camera);
}

// =========================
// HELPERS
// =========================
function rand() {
    return Math.random() * 40 - 20;
}