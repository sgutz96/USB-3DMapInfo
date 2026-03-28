// js/data/topicModels.js
// Datos de los 10 modelos GLTF que se colocan en la escena.
// Ajusta position, modelScale y rotation según necesites.
// El bloque `fallback` define el cubo que aparece si el .glb falla al cargar.

export const topicModels = [
  {
    id: 'modelo_01',
    title: 'Dulse Scoto',
    modelPath:  './models/DS.glb',
    position:   [-2,  0,  -5],
    modelScale: [1.5,  1.5,  1.5],
    rotation:   [0,  90 * (Math.PI / 180),  0],   // radianes  [x, y, z]
    fallback: { scale: [2, 2, 2], color: 0x00cccc },
    callToAction: 'el edificio de Dulse Scoto el edificio del saber',
    text: 'Dulse Scoto es un edificio emblemático de la Universidad San Buenaventura, conocido por su arquitectura moderna y su función como centro de recursos académicos. Este edificio alberga la biblioteca principal, salas de estudio, laboratorios de informática y espacios para la investigación, proporcionando a los estudiantes y profesores un entorno propicio para el aprendizaje y el desarrollo intelectual.',
    tags: ['Crianza', 'Cuidado', 'Reflexión'],
    images: [
      './Img/Maestras en formación/MEF_ (1).jfif',
      './Img/Maestras en formación/MEF_ (2).jfif',
      './Img/Maestras en formación/MEF_ (3).jfif',
      './Img/Maestras en formación/MEF_ (4).jfif',
      './Img/Maestras en formación/MEF_ (5).jfif',
      './Img/Maestras en formación/MEF_ (6).jfif',
    ],
  },
];
