import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// 1. Создание сцены, камеры и рендерера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Настройка камеры
camera.position.z = 5;

// 3. Добавление OrbitControls (для управления камерой)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // плавное движение
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 2;
controls.maxDistance = 10;

// 4. Создание и добавление сфер
const geometry = new THREE.SphereGeometry(0.5, 32, 32); // Радиус, сегменты, кольца
const material = new THREE.MeshLambertMaterial({ color: 0x00ffff }); // Голубой цвет

const centralSphere = new THREE.Mesh(geometry, material);
scene.add(centralSphere);

const orbitingSphere1 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xff0000 })); // Красный
const orbitingSphere2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0x00ff00 })); // Зеленый
scene.add(orbitingSphere1);
scene.add(orbitingSphere2);

// Позиционирование орбитирующих сфер на расстоянии от центральной
const orbitRadius = 2;  // Расстояние от центра
orbitingSphere1.position.x = orbitRadius;
orbitingSphere2.position.x = -orbitRadius;

// 5. Добавление освещения
const ambientLight = new THREE.AmbientLight(0x404040); // Мягкий, рассеянный свет
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Направленный свет (белый, интенсивность 0.5)
directionalLight.position.set(1, 1, 1); // Направление света
scene.add(directionalLight);


// 6. Анимация
const rotationSpeed = 2 * Math.PI / 20; // Угол в радианах, который сфера должна пройти за секунду (один оборот за 20 секунд)

function animate() {
    requestAnimationFrame(animate);

    // Вращение орбитирующих сфер вокруг центра
    orbitingSphere1.position.x = Math.cos(Date.now() * rotationSpeed) * orbitRadius;
    orbitingSphere1.position.z = Math.sin(Date.now() * rotationSpeed) * orbitRadius;

    orbitingSphere2.position.x = Math.cos(Date.now() * rotationSpeed + Math.PI) * orbitRadius; // Сдвиг фазы на PI для противоположного вращения
    orbitingSphere2.position.z = Math.sin(Date.now() * rotationSpeed + Math.PI) * orbitRadius;

    // Важно: заставляем OrbitControls обновить своё состояние
    controls.update();

    renderer.render(scene, camera);
}

// 7. Обработчик изменения размера окна
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

animate();
