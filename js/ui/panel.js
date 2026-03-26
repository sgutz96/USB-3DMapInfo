let currentTopic = null;

// =========================
// SHOW PANEL
// =========================
export function showPanel(topic) {
    currentTopic = topic;

    // Título
    const title = document.getElementById('panel-title');
    title.textContent = topic.title;
    title.style.color = toHex(topic.color);

    // CTA
    const cta = document.getElementById('call-to-action');
    cta.textContent = topic.callToAction;
    cta.style.backgroundColor = toHex(topic.color);

    // Texto
    document.getElementById('panel-text').textContent = topic.text;

    // Tags
    const tagsContainer = document.getElementById('tags-container');
    tagsContainer.innerHTML = '';

    topic.tags.forEach(tag => {
        const el = document.createElement('span');
        el.className = 'tag';
        el.textContent = tag;
        tagsContainer.appendChild(el);
    });

    // Mostrar panel
    document.getElementById('side-panel').classList.add('active');
    document.getElementById('instructions').classList.add('hidden');
}

// =========================
// CLOSE PANEL
// =========================
export function closePanel() {
    document.getElementById('side-panel').classList.remove('active');
    document.getElementById('instructions').classList.remove('hidden');

    currentTopic = null;
}

// =========================
// GET CURRENT (IMPORTANTE)
// =========================
export function getCurrentTopic() {
    return currentTopic;
}

// =========================
// HELPER
// =========================
function toHex(color) {
    return '#' + color.toString(16).padStart(6, '0');
}