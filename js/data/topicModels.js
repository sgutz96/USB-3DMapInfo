// js/data/topicModels.js
// Datos de los 10 modelos GLTF que se colocan en la escena.
// Ajusta position, modelScale y rotation según necesites.
// El bloque `fallback` define el cubo que aparece si el .glb falla al cargar.

export const topicModels = [
  {
    id: 'modelo_01',
    title: 'Duns Scoto',
    modelPath: './models/DS.glb',
    position: [-2, 0, -5],
    modelScale: [1.5, 1.5, 1.5],
    rotation: [0, Math.PI / 2, 0],
    fallback: { scale: [2, 2, 2], color: 0x00cccc },
    callToAction: 'Biblioteca y centro del conocimiento',
    text: 'El edificio Duns Scoto es uno de los espacios académicos más importantes de la Universidad de San Buenaventura. Alberga la biblioteca principal, zonas de estudio, salas de investigación y recursos digitales que apoyan el aprendizaje autónomo y colaborativo.',
    tags: ['Biblioteca', 'Estudio', 'Investigación'],
    images: [
      './Img/duns_scoto/1.jpg',
      './Img/duns_scoto/2.jpg',
      './Img/duns_scoto/3.jpg',
    ],
  },

  {
    id: 'modelo_02',
    title: 'Diego Barroso',
    modelPath: './models/DB.glb',
    position: [-7, 0, -0.5],
    modelScale: [1.5, 1.5, 1.5],
    rotation: [0, Math.PI / 2, 0],
    fallback: { scale: [2, 2, 2], color: 0x00cccc },
    callToAction: 'Espacio académico y administrativo',
    text: 'El edificio Diego Barroso integra aulas, oficinas administrativas y espacios académicos donde se desarrollan actividades formativas y de gestión institucional dentro de la universidad.',
    tags: ['Aulas', 'Administración', 'Académico'],
    images: [
      './Img/diego_barroso/1.jpg',
      './Img/diego_barroso/2.jpg',
      './Img/diego_barroso/3.jpg',
    ],
  },

  {
    id: 'modelo_03',
    title: 'Pedro Simón',
    modelPath: './models/PS.glb',
    position: [-4.5, 0, 2],
    modelScale: [1.5, 1.5, 1.5],
    rotation: [0, Math.PI / 2, 0],
    fallback: { scale: [2, 2, 2], color: 0x00cccc },
    callToAction: 'Formación y desarrollo académico',
    text: 'El edificio Pedro Simón está destinado a actividades académicas y formativas. Cuenta con aulas equipadas y espacios que favorecen el aprendizaje dinámico en diferentes disciplinas.',
    tags: ['Educación', 'Clases', 'Formación'],
    images: [
      './Img/pedro_simon/1.jpg',
      './Img/pedro_simon/2.jpg',
      './Img/pedro_simon/3.jpg',
    ],
  },

  {
    id: 'modelo_04',
    title: 'Guillermo de Ockham',
    modelPath: './models/GO.glb',
    position: [-3, 0, 4.5],
    modelScale: [1.5, 1.5, 1.5],
    rotation: [0, Math.PI / 2, 0],
    fallback: { scale: [2, 2, 2], color: 0x00cccc },
    callToAction: 'Espacio académico interdisciplinario',
    text: 'El edificio Guillermo de Ockham alberga espacios académicos destinados a distintas áreas del conocimiento, promoviendo el pensamiento crítico, la investigación y la interdisciplinariedad.',
    tags: ['Interdisciplinar', 'Pensamiento crítico', 'Academia'],
    images: [
      './Img/ockham/1.jpg',
      './Img/ockham/2.jpg',
      './Img/ockham/3.jpg',
    ],
  },
];