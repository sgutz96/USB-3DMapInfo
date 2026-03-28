// js/main.js
// Entry point – initialises scene, camera, and starts the animation loop.

import { createCamera, orbitCamera } from './camera.js';
import { initScene, scene, renderer } from './scene.js';
import { showPanel, closePanel }      from './ui/panel.js';
import { openModal, closeModal, nextSlide, prevSlide, goToSlide } from './ui/modal.js';

// ─── Bootstrap ────────────────────────────────────────────────────────────────

const container = document.getElementById('canvas-container');
const camera    = createCamera(container);

initScene(camera, container);

// Hide loading indicator once everything is ready
document.getElementById('loading').style.display = 'none';

// ─── Expose UI callbacks to inline HTML onclick attributes ────────────────────
// (keeps the HTML tidy while still using module-scope functions)

window.closePanel = closePanel;
window.openModal  = openModal;
window.closeModal = closeModal;
window.nextSlide  = nextSlide;
window.prevSlide  = prevSlide;
window.goToSlide  = goToSlide;

// ─── Resize handler ───────────────────────────────────────────────────────────

window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

// ─── Animation loop ───────────────────────────────────────────────────────────

const angleRef = { value: Math.PI / 6 };

function animate() {
  requestAnimationFrame(animate);
  orbitCamera(camera, angleRef);
  renderer.render(scene, camera);
}

animate();
