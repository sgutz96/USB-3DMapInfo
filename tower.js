 import * as THREE from 'three';

        const topics = [
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
                ]},
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
            },
        ];


        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        let currentTopic = null;
        let currentSlide = 0;
        let scene, camera, renderer, cubes = [];

        function init() {
            const container = document.getElementById('canvas-container');

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xB7C5E8);
            scene.fog = new THREE.Fog(0xB7C5E8, 10, 50);

            camera = new THREE.PerspectiveCamera(
                50,
                container.clientWidth / container.clientHeight,
                0.1,
                1000
            );

            const distance = 20;
            const angle = Math.PI / 6;
            camera.position.set(
                distance * Math.cos(angle),
                distance * 0.8,
                distance * Math.sin(angle)
            );
            camera.lookAt(0, 0, 0);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            container.appendChild(renderer.domElement);

            const ambientLight = new THREE.AmbientLight(0xF4E4C1, 0.7);
            scene.add(ambientLight);

            const sunLight = new THREE.DirectionalLight(0xFFE4B5, 0.8);
            sunLight.position.set(10, 15, 5);
            sunLight.castShadow = true;
            sunLight.shadow.mapSize.width = 2048;
            sunLight.shadow.mapSize.height = 2048;
            sunLight.shadow.camera.left = -15;
            sunLight.shadow.camera.right = 15;
            sunLight.shadow.camera.top = 15;
            sunLight.shadow.camera.bottom = -15;
            scene.add(sunLight);

            const fillLight = new THREE.DirectionalLight(0xDEB887, 0.3);
            fillLight.position.set(-5, 5, -5);
            scene.add(fillLight);

            const groundGeometry = new THREE.PlaneGeometry(80, 80);
            const groundMaterial = new THREE.MeshStandardMaterial({
                color: 0x72F688,
                roughness: 0.9,
                metalness: 0.1
            });
            const ground = new THREE.Mesh(groundGeometry, groundMaterial);
            ground.rotation.x = -Math.PI / 2;
            ground.receiveShadow = true;
            scene.add(ground);


            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // Cargar textura
            const textureLoader = new THREE.TextureLoader();
            const texture = textureLoader.load('Textures/TexturePiso_V2.png', () => {
                renderer.render(scene, camera);
            });

            // Repetir la textura para cubrir bien el plano
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(1, 1); // Ajusta según necesites

            // Crear plano 20x20
            const geometryPiso = new THREE.PlaneGeometry(20, 20);
            const materialPiso = new THREE.MeshStandardMaterial({ map: texture, alphaTest: 0.9 });
            const Colegio = new THREE.Mesh(geometryPiso, materialPiso);
            Colegio.rotation.x = -Math.PI / 2;
            Colegio.position.y = 0.01; // Pequeño offset para evitar z-fighting
            scene.add(Colegio);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





            topics.forEach((topic) => {
                const geometry = new THREE.BoxGeometry(...topic.scale);
                const material = new THREE.MeshStandardMaterial({
                    color: topic.color,
                    roughness: 0.7,
                    metalness: 0.2
                });
                const cube = new THREE.Mesh(geometry, material);
                cube.position.set(topic.position[0], topic.position[1], topic.position[2]);
                cube.castShadow = true;
                cube.receiveShadow = true;
                cube.userData = topic;
                scene.add(cube);
                cubes.push(cube);

                const roofGeometry = new THREE.BoxGeometry(
                    topic.scale[0] + 0.2,
                    0.3,
                    topic.scale[2] + 0.2
                );
                const roofMaterial = new THREE.MeshStandardMaterial({
                    color: new THREE.Color(topic.color).multiplyScalar(0.6),
                    roughness: 0.8
                });
                const roof = new THREE.Mesh(roofGeometry, roofMaterial);
                roof.position.set(
                    topic.position[0],
                    topic.position[1] + topic.scale[1] / 2 + 0.15,
                    topic.position[2]
                );
                roof.castShadow = true;
                scene.add(roof);

                const windowGeometry = new THREE.BoxGeometry(0.4, 0.5, 0.1);
                const windowMaterial = new THREE.MeshStandardMaterial({
                    color: 0x4A4A4A,
                    emissive: 0xFFE4B5,
                    emissiveIntensity: 0.3
                });

                for (let i = 0; i < 2; i++) {
                    const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
                    window1.position.set(
                        topic.position[0] + (i - 0.5) * topic.scale[0] * 0.4,
                        topic.position[1] + topic.scale[1] * 0.2,
                        topic.position[2] + topic.scale[2] / 2 + 0.05
                    );
                    scene.add(window1);
                }
            });

            const addTree = (x, z) => {
                // --- Tronco bonito con forma más natural ---
    const trunkGeom = new THREE.CylinderGeometry(0.25, 0.35, 1.8, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8B5A2B });
    const trunk = new THREE.Mesh(trunkGeom, trunkMat);
    trunk.position.set(x, 0.9, z);
    trunk.castShadow = true;
    scene.add(trunk);

    // --- Copas en 3 niveles para hacerlo más tierno ---
    const colors = [0x7FB77E, 0x6FB06D, 0x5DAA5A]; // degradé verde cute
    const sizes = [1.1, 0.9, 0.7];
    const heights = [1.8, 2.4, 2.9];

    for (let i = 0; i < 3; i++) {
        const crownGeom = new THREE.SphereGeometry(sizes[i], 10, 10);
        const crownMat = new THREE.MeshStandardMaterial({
            color: colors[i],
            roughness: 0.8
        });

        const crown = new THREE.Mesh(crownGeom, crownMat);
        crown.position.set(x, heights[i], z);
        crown.castShadow = true;

        scene.add(crown);
    }

    // --- Pequeños bumps para darle textura linda ---
    const bumpGeom = new THREE.SphereGeometry(0.25, 10, 10);
    const bumpMat = new THREE.MeshStandardMaterial({ color: 0x74C17E });

    const bumpOffsets = [
        [0.5, 2.2, 0.2],
        [-0.4, 2.6, -0.3],
        [0.3, 2.0, -0.4],
    ];

    bumpOffsets.forEach(([dx, h, dz]) => {
        const bump = new THREE.Mesh(bumpGeom, bumpMat);
        bump.position.set(x + dx, h, z + dz);
        bump.castShadow = true;
        scene.add(bump);
    });
            };

            const addFlowerCute1 = (x, z) => {
    // Tallo
    const stemGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.45, 6);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x2ECC71 });
    const stem = new THREE.Mesh(stemGeom, stemMat);
    stem.position.set(x, 0.225, z);
    scene.add(stem);

    // Centro de la flor
    const centerGeom = new THREE.SphereGeometry(0.12, 10, 10);
    const centerMat = new THREE.MeshStandardMaterial({ color: 0xF7DC6F });
    const center = new THREE.Mesh(centerGeom, centerMat);
    center.position.set(x, 0.45, z);
    scene.add(center);

    // Pétalos alrededor
    const petalGeom = new THREE.SphereGeometry(0.13, 10, 10);
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xFF7ABF });

    const angleStep = (Math.PI * 2) / 6;
    for (let i = 0; i < 6; i++) {
        const petal = new THREE.Mesh(petalGeom, petalMat);
        const angle = i * angleStep;
        petal.position.set(
            x + Math.cos(angle) * 0.20,
            0.45,
            z + Math.sin(angle) * 0.20
        );
        scene.add(petal);
    }
};

const addFlowerCute2 = (x, z) => {
    // Tallo
    const stemGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 6);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x27AE60 });
    const stem = new THREE.Mesh(stemGeom, stemMat);
    stem.position.set(x, 0.25, z);
    scene.add(stem);

    // Centro
    const centerGeom = new THREE.SphereGeometry(0.12, 10, 10);
    const centerMat = new THREE.MeshStandardMaterial({ color: 0xF4D03F });
    const center = new THREE.Mesh(centerGeom, centerMat);
    center.position.set(x, 0.5, z);
    scene.add(center);

    // Pétalos ovalados
    const petalGeom = new THREE.SphereGeometry(0.18, 10, 10);
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xFAD7A0 });

    const angleStep = (Math.PI * 2) / 8;
    for (let i = 0; i < 8; i++) {
        const petal = new THREE.Mesh(petalGeom, petalMat);
        const angle = i * angleStep;
        petal.scale.set(0.6, 1, 0.6); // más ovalado

        petal.position.set(
            x + Math.cos(angle) * 0.25,
            0.5,
            z + Math.sin(angle) * 0.25
        );
        scene.add(petal);
    }
};

const addCutePot = (x, z) => {
    // Maceta estilo curvo
    const potGeom = new THREE.CylinderGeometry(0.35, 0.45, 0.45, 12);
    const potMat = new THREE.MeshStandardMaterial({ color: 0xD35400 });
    const pot = new THREE.Mesh(potGeom, potMat);
    pot.position.set(x, 0.225, z);
    scene.add(pot);

    // Planta redonda y suave
    const plantGeom = new THREE.SphereGeometry(0.45, 12, 12);
    const plantMat = new THREE.MeshStandardMaterial({ color: 0x58D68D });
    const plant = new THREE.Mesh(plantGeom, plantMat);
    plant.position.set(x, 0.6, z);
    scene.add(plant);

    // Detalle hojas
    const leafGeom = new THREE.SphereGeometry(0.2, 10, 10);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x2ECC71 });

    const leaf1 = new THREE.Mesh(leafGeom, leafMat);
    leaf1.scale.set(1, 0.6, 1);
    leaf1.position.set(x + 0.2, 0.7, z);
    scene.add(leaf1);

    const leaf2 = leaf1.clone();
    leaf2.position.set(x - 0.2, 0.7, z);
    scene.add(leaf2);
};

const addCutePine = (x, z) => {
    // Tronco
    const trunkGeom = new THREE.CylinderGeometry(0.15, 0.2, 1, 8);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const trunk = new THREE.Mesh(trunkGeom, trunkMat);
    trunk.position.set(x, 0.5, z);
    scene.add(trunk);

    // Niveles del pino
    const materials = [
        new THREE.MeshStandardMaterial({ color: 0x2ECC71 }),
        new THREE.MeshStandardMaterial({ color: 0x28B463 }),
        new THREE.MeshStandardMaterial({ color: 0x239B56 })
    ];

    const heights = [1.1, 1.6, 2.0];

    heights.forEach((h, i) => {
        const coneGeom = new THREE.ConeGeometry(0.9 - i * 0.25, 0.8, 10);
        const cone = new THREE.Mesh(coneGeom, materials[i]);
        cone.position.set(x, h, z);
        scene.add(cone);
    });
};
            // Añadir árboles y plantas decorativas
            addTree(-15, 0); 
            addTree(-12, 5); 
            addTree(-9, 2); 
            addTree(-4, 0); 
            addTree(-3, -3); 
            addTree(10, 7); 
            addTree(3, -1); 
            addTree(1, -10); 
            addTree(-3, -8); 
            addTree(7, 0); 
            addTree(-1, 8); 
            addTree(0, 0); 
            addTree(5, 10); 
            addTree(-8, 11); 
            addTree(5, -12);  
            addCutePine(5, 0);  
            addCutePine(10, 5);  
            addCutePine(10, 1);  
            addCutePine(8, 3);  
            addCutePine(10, 9);  
            addCutePine(7, 12);  
            addCutePine(5, 13);  
            addCutePine(3, 15);  
            addCutePine(-5, 10);  
            addCutePine(-10, -10);  
            addCutePine(-12, -11);  
            addCutePine(-11, -13);
            addCutePine(10, -10);  
            addCutePine(12, -11);  
            addCutePine(11, -13);  

            addCutePot(-2, 5.5);
            addCutePot(-2, 3.5);
            addCutePot(-2, 1.5);
            addCutePot(1.5, -8);
            addCutePot(1.5, -7);
            

            for (let i = 0; i < 20; i++) {
    const x = Math.random() * 40 - 20; // rango -20 a 20
    const z = Math.random() * 40 - 20; // rango -20 a 20
    addFlowerCute1(x, z);
}
for (let i = 0; i < 30; i++) {
    const x = Math.random() * 40 - 20; // rango -20 a 20
    const z = Math.random() * 40 - 20; // rango -20 a 20
    addFlowerCute2(x, z);
}



           
          

            renderer.domElement.addEventListener('click', onMouseClick);
            window.addEventListener('resize', onWindowResize);

            document.getElementById('loading').style.display = 'none';
            animate();
        }

        function onMouseClick(event) {
            const rect = renderer.domElement.getBoundingClientRect();
            const mouse = new THREE.Vector2();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(cubes);

            if (intersects.length > 0) {
                window.showPanel(intersects[0].object.userData);
            }
        }

        window.showPanel = function (topic) {
            currentTopic = topic;
            currentSlide = 0;

            document.getElementById('panel-title').textContent = topic.title;
            document.getElementById('panel-title').style.color = '#' + topic.color.toString(16).padStart(6, '0');

            const cta = document.getElementById('call-to-action');
            cta.textContent = topic.callToAction;
            cta.style.backgroundColor = '#' + topic.color.toString(16).padStart(6, '0');

            document.getElementById('panel-text').textContent = topic.text;

            const tagsContainer = document.getElementById('tags-container');
            tagsContainer.innerHTML = '';
            topic.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'tag';
                tagEl.textContent = tag;
                tagsContainer.appendChild(tagEl);
            });

            const galleryBtn = document.getElementById('gallery-btn');
            galleryBtn.style.backgroundColor = '#' + topic.color.toString(16).padStart(6, '0');

            document.getElementById('side-panel').classList.add('active');
            document.getElementById('instructions').classList.add('hidden');
        }

        window.closePanel = function () {
            document.getElementById('side-panel').classList.remove('active');
            document.getElementById('instructions').classList.remove('hidden');
            currentTopic = null;
        }

        window.openModal = function () {
            if (!currentTopic) return;

            document.getElementById('modal-title').textContent = 'Galería - ' + currentTopic.title;
            document.getElementById('carousel-image').src = currentTopic.images[currentSlide];


            const indicators = document.getElementById('indicators');
            indicators.innerHTML = '';
            currentTopic.images.forEach((_, index) => {
                const indicator = document.createElement('button');
                indicator.className = 'indicator' + (index === currentSlide ? ' active' : '');
                indicator.onclick = () => window.goToSlide(index);
                indicators.appendChild(indicator);
            });

            document.getElementById('modal').classList.add('active');
        }

        window.closeModal = function () {
            document.getElementById('modal').classList.remove('active');
        }

        window.nextSlide = function () {
            if (!currentTopic) return;
            currentSlide = (currentSlide + 1) % currentTopic.images.length;
            window.updateCarousel();
        }

        window.prevSlide = function () {
            if (!currentTopic) return;
            currentSlide = currentSlide === 0 ? currentTopic.images.length - 1 : currentSlide - 1;
            window.updateCarousel();
        }

        window.goToSlide = function (index) {
            currentSlide = index;
            window.updateCarousel();
        }

        window.updateCarousel = function () {
            document.getElementById('carousel-image').src = currentTopic.images[currentSlide];

            const indicators = document.querySelectorAll('.indicator');
            indicators.forEach((ind, index) => {
                ind.className = 'indicator' + (index === currentSlide ? ' active' : '');
            });
        }

        function onWindowResize() {
            const container = document.getElementById('canvas-container');
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }

        let cameraAngle = Math.PI / 6;
        function animate() {
            requestAnimationFrame(animate);

            const distance = 20;
            cameraAngle += 0.001;
            camera.position.x = distance * Math.cos(cameraAngle);
            camera.position.z = distance * Math.sin(cameraAngle);
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        }

        init();