// js/objects/gltfModel.js
// Carga un modelo GLTF/GLB y lo añade a la escena.
// Si falla, muestra un cubo de fallback con el color definido en los datos.

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Loader compartido — una sola instancia para todos los modelos
const loader = new GLTFLoader();

/**
 * Crea un Group posicionado, inicia la carga del .glb y lo añade a la escena.
 * Devuelve el Group inmediatamente (vacío hasta que el modelo termina de cargar).
 *
 * @param {THREE.Scene} scene
 * @param {Object}      data           - entrada de topicModels.js
 * @param {string}      data.id
 * @param {string}      data.modelPath
 * @param {number[]}    data.position   - [x, y, z]
 * @param {number[]}    data.modelScale - [x, y, z]
 * @param {number[]}    data.rotation   - [x, y, z] en radianes
 * @param {Object}      data.fallback   - { scale: [x,y,z], color: 0x... }
 *
 * @returns {THREE.Group}  group ya añadido a la escena (clickable via raycaster)
 */
export function createGltfModel(scene, data) {
  const group = new THREE.Group();

  // Posición y rotación del grupo completo
  group.position.set(...data.position);
  group.rotation.set(...data.rotation);

  // Guardar referencia a los datos para el raycaster / panel
  group.userData = data;

  scene.add(group);

  // ── Carga asíncrona ──────────────────────────────────────────────────────
  loader.load(
    data.modelPath,

    // onLoad
    (gltf) => {
      const model = gltf.scene;

      model.scale.set(...data.modelScale);

      // Activar sombras en cada mesh del modelo
      model.traverse((node) => {
        if (node.isMesh) {
          node.castShadow    = true;
          node.receiveShadow = true;
          // Propagar userData al mesh para que el raycaster también lo encuentre
          node.userData = data;
        }
      });

      group.add(model);
      console.log(`✅ Modelo cargado: ${data.id}`);
    },

    // onProgress (opcional — puedes eliminarlo si no lo necesitas)
    (xhr) => {
      if (xhr.lengthComputable) {
        const pct = Math.round((xhr.loaded / xhr.total) * 100);
        console.log(`⏳ ${data.id}: ${pct}%`);
      }
    },

    // onError → fallback cube
    (error) => {
      console.warn(`⚠️ No se pudo cargar "${data.modelPath}". Mostrando cubo de fallback.`, error);
      group.add(_makeFallbackCube(data.fallback));
    }
  );

  return group;
}

// ── Helpers privados ─────────────────────────────────────────────────────────

/**
 * Crea un cubo simple que se usa cuando el modelo no carga.
 * @param {{ scale: number[], color: number }} fallback
 * @returns {THREE.Mesh}
 */
function _makeFallbackCube(fallback) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(...fallback.scale),
    new THREE.MeshStandardMaterial({
      color:     fallback.color,
      roughness: 0.7,
      metalness: 0.2,
    })
  );
  mesh.castShadow    = true;
  mesh.receiveShadow = true;
  return mesh;
}
