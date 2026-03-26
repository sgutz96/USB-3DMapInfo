export const topics = [
  {
    id: 'maestrasEnFormacion',
    title: 'Maestras en formación',
    color: 0xF29B9B,
    position: [-7, 1.5, -2],
    scale: [2.2, 4, 2.2],
    callToAction: 'Las maestras en formación te cuentan',
    text: 'La forma en que las maestras vivieron su infancia influye directamente en su trabajo en el TPII debido a que estas experiencias previas configuran sus creencias, prácticas y concepciones sobre cuidado y crianza. El proceso reflexivo en el TPII les permite reconocer esas huellas y transformarlas, evitando reproducir prácticas limitantes.  ',
    tags: ['Crianza', 'Cuidado', 'Reflexión'],
    images: [
      './Img/Maestras en formación/MEF_ (1).jfif',
      './Img/Maestras en formación/MEF_ (2).jfif',
      './Img/Maestras en formación/MEF_ (3).jfif',
      './Img/Maestras en formación/MEF_ (4).jfif',
      './Img/Maestras en formación/MEF_ (5).jfif',
      './Img/Maestras en formación/MEF_ (6).jfif'
    ]


  },
  {
    id: 'Maternal',
    title: 'Maternal',
    color: 0xF29BC8,
    position: [0, 1, -7.5],
    scale: [2.2, 4.5, 2.2],
    callToAction: 'Explora y aprende más',
    text: 'El nivel maternal es un espacio donde los niños aprenden a habitar el mundo a través de la exploración sensorial y el cuidado, desarrollando vínculos afectivos, autonomía inicial y experiencias que les permiten descubrir su entorno con seguridad y confianza. ',
    tags: ['exploración', 'cuidado', 'vínculos', 'autonomía'],
    images: ['./Img/Maternal/Maternal_ (1).png', './Img/Maternal/Maternal_ (2).png', './Img/Maternal/Maternal_ (3).png', './Img/Maternal/Maternal_ (4).png', './Img/Maternal/Maternal_ (5).png', './Img/Maternal/Maternal_ (6).png', './Img/Maternal/Maternal_ (7).png', './Img/Maternal/Maternal_ (8).png', './Img/Maternal/Maternal_ (9).png']
  },
  {
    id: 'Párvulos',
    title: 'Párvulos',
    color: 0xD89BF2,
    position: [-7, 0, 8],
    scale: [2.2, 4, 2.2],
    callToAction: 'Descubre jugando juntos',
    text: 'El nivel de Párvulos es un espacio donde los niños comienzan a fortalecer su autonomía y a explorar el mundo a través de juego, la interacción social y el lenguaje. Aquí se promueve el desarrollo sensorial, motor y emocional, favoreciendo experiencias que les permiten descubrir, preguntar y construir vínculos significativos en un ambiente seguro y afectivo.',
    tags: ['exploración', 'juego', 'descubrimiento', 'emoción'],
    //falta
    images: ['./Img/Parvulos/Parvulos_ (2).jfif', './Img/Parvulos/Parvulos_ (3).jpg', './Img/Parvulos/Parvulos_ (4).jfif', './Img/Parvulos/Parvulos_ (5).jpg', './Img/Parvulos/Parvulos_ (6).jpg']
  },
  {
    id: 'Prejardín',
    title: 'Prejardín',
    color: 0x9BA8F2,
    position: [-7, 0.8, 1],
    scale: [2.5, 4, 3.4],
    callToAction: 'Explora, crea y comparte',
    text: 'El nivel Prejardín es un espacio donde los niños consolidan su autonomía y amplían sus experiencias de exploración. A través del juego, la interacción con sus pares y el desarrollo del lenguaje, fortalecen habilidades cognitivas, sociales y emocionales. Se promueve la curiosidad, la expresión creativa y el descubrimiento del entorno, favoreciendo aprendizajes significativos en un ambiente seguro y afectivo. ',
    tags: ['autonomía', 'lenguaje', 'habilidades cognitivas', 'juego'],
    //falta
    images: ['./Img/Pre-jardinB/Prejrardin_ (1).jfif', './Img/Pre-jardinB/Prejrardin_ (2).jpeg', './Img/Pre-jardinB/Prejrardin_ (3).jfif', './Img/Pre-jardinB/Prejrardin_ (4).jfif', './Img/Pre-jardinB/Prejrardin_ (5).jfif', './Img/Pre-jardinB/Prejrardin_ (6).jpeg', './Img/Pre-jardinB/Prejrardin_ (7).jfif', './Img/Pre-jardinB/Prejrardin_ (8).jpeg']
  },/*
            {
                id: 'instrumentos',
                title: 'Instrumentos',
                color: 0x72D688,
                position: [-1, 1.2, 4],
                scale: [2, 2.4, 2],
                callToAction: 'Conoce las herramientas',
                text: 'Mapas base, fichas de observación, fotografías, entrevistas y talleres participativos son algunos de los instrumentos utilizados.',
                tags: ['Herramientas', 'Metodología', 'Técnicas'],
                images: ['Instrumento 1', 'Instrumento 2', 'Instrumento 3']
            },
            {
                id: 'marco-teorico',
                title: 'Marco Teórico',
                color: 0xF0DB73,
                position: [6, 1.8, -1],
                scale: [2.5, 3.6, 2.5],
                callToAction: 'Profundiza en la teoría',
                text: 'Basado en la geografía crítica, la investigación acción participativa y los estudios territoriales contemporáneos.',
                tags: ['Teoría', 'Geografía', 'Participación'],
                images: ['Teoría 1', 'Teoría 2', 'Teoría 3']
            },
            {
                id: 'metodologia',
                title: 'Metodología',
                color: 0xF07373,
                position: [4, 1.4, 4],
                scale: [2, 2.8, 2],
                callToAction: 'Entiende el proceso',
                text: 'Proceso mixto que combina técnicas cualitativas y cuantitativas, priorizando el enfoque participativo y la construcción colectiva.',
                tags: ['Proceso', 'Mixto', 'Colaborativo'],
                images: ['Método 1', 'Método 2', 'Método 3']
            },
            {
                id: 'estrategia-didactica',
                title: 'Estrategia Didáctica',
                color: 0xBC8F8F,
                position: [-5, 1, -5],
                scale: [2.2, 2, 2.2],
                callToAction: 'Descubre la estrategia',
                text: 'Talleres vivenciales, recorridos territoriales y construcción colectiva de mapas que fomentan el aprendizaje significativo.',
                tags: ['Educación', 'Talleres', 'Aprendizaje'],
                images: ['Estrategia 1', 'Estrategia 2', 'Estrategia 3']
            }*/
];
