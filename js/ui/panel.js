// js/ui/panel.js
// Manages the side-panel that shows topic details.

let currentTopic = null;

/** Returns the currently selected topic (or null). */
export function getCurrentTopic() {
  return currentTopic;
}

/**
 * Opens the side panel and populates it with the topic's data.
 * @param {Object} topic
 */
export function showPanel(topic) {
  currentTopic = topic;

  // color puede venir de topic.color (topics.js) o de topic.fallback.color
  // (topicModels.js). Si no hay ninguno, usa el marrón por defecto.
  const rawColor = topic.color ?? topic.fallback?.color ?? 0x8B4513;
  const hexColor = '#' + rawColor.toString(16).padStart(6, '0');

  document.getElementById('panel-title').textContent    = topic.title;
  document.getElementById('panel-title').style.color    = hexColor;

  const cta = document.getElementById('call-to-action');
  cta.textContent           = topic.callToAction;
  cta.style.backgroundColor = hexColor;

  document.getElementById('panel-text').textContent = topic.text;

  const tagsContainer = document.getElementById('tags-container');
  tagsContainer.innerHTML = '';
  (topic.tags ?? []).forEach((tag) => {
    const el = document.createElement('span');
    el.className   = 'tag';
    el.textContent = tag;
    tagsContainer.appendChild(el);
  });

  // Ocultar botón de galería si no hay imágenes
  const galleryBtn = document.getElementById('gallery-btn');
  if (topic.images && topic.images.length > 0) {
    galleryBtn.style.display          = 'block';
    galleryBtn.style.backgroundColor  = hexColor;
  } else {
    galleryBtn.style.display = 'none';
  }

  document.getElementById('side-panel').classList.add('active');
  document.getElementById('instructions').classList.add('hidden');
}

/** Closes the side panel. */
export function closePanel() {
  document.getElementById('side-panel').classList.remove('active');
  document.getElementById('instructions').classList.remove('hidden');
  currentTopic = null;
}