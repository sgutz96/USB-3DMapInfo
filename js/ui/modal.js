// js/ui/modal.js
// Manages the image-gallery modal and its carousel.

import { getCurrentTopic } from './panel.js';

let currentSlide = 0;

/** Opens the gallery modal for the currently active topic. */
export function openModal() {
  const topic = getCurrentTopic();
  if (!topic) return;

  currentSlide = 0;
  document.getElementById('modal-title').textContent = 'Galería - ' + topic.title;
  document.getElementById('carousel-image').src      = topic.images[currentSlide];

  _buildIndicators(topic);
  document.getElementById('modal').classList.add('active');
}

/** Closes the gallery modal. */
export function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

/** Advances the carousel to the next image. */
export function nextSlide() {
  const topic = getCurrentTopic();
  if (!topic) return;
  currentSlide = (currentSlide + 1) % topic.images.length;
  _updateCarousel(topic);
}

/** Moves the carousel to the previous image. */
export function prevSlide() {
  const topic = getCurrentTopic();
  if (!topic) return;
  currentSlide = currentSlide === 0 ? topic.images.length - 1 : currentSlide - 1;
  _updateCarousel(topic);
}

/**
 * Jumps directly to a specific slide index.
 * @param {number} index
 */
export function goToSlide(index) {
  const topic = getCurrentTopic();
  if (!topic) return;
  currentSlide = index;
  _updateCarousel(topic);
}

// ─── private helpers ───────────────────────────────────────────────────────

function _buildIndicators(topic) {
  const container = document.getElementById('indicators');
  container.innerHTML = '';
  topic.images.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'indicator' + (i === currentSlide ? ' active' : '');
    btn.addEventListener('click', () => goToSlide(i));
    container.appendChild(btn);
  });
}

function _updateCarousel(topic) {
  document.getElementById('carousel-image').src = topic.images[currentSlide];
  document.querySelectorAll('.indicator').forEach((el, i) => {
    el.className = 'indicator' + (i === currentSlide ? ' active' : '');
  });
}
