import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';  //No longer needed as imported in HTML

// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Spheres
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial1 = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red
const sphereMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green
const sphereMaterial3 = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blue
const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial3);

sphere1.position.set(-5, 0, 0);
sphere2.position.set(0, 0, 0);
sphere3.position.set(5, 0, 0);

scene.add(sphere1, sphere2, sphere3);

camera.position.z = 10;

// Animation variables
let animationRunning = true;
let hue1 = 0, hue2 = 120, hue3 = 240;

// Animation function
function animate() {
  requestAnimationFrame(animate);

  if (animationRunning) {
    // Change sphere colors
    sphereMaterial1.color.setHSL(hue1 / 360, 1, 0.5);
    sphereMaterial2.color.setHSL(hue2 / 360, 1, 0.5);
    sphereMaterial3.color.setHSL(hue3 / 360, 1, 0.5);
    hue1 += 0.5;
    hue2 += 0.7;
    hue3 += 0.3;
    hue1 %= 360;
    hue2 %= 360;
    hue3 %= 360;


    // Rotate spheres
    sphere1.rotation.y += 0.01;
    sphere2.rotation.y += 0.02;
    sphere3.rotation.y += 0.015;
  }

  renderer.render(scene, camera);
}

//Pause/Resume functionality
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    animationRunning = !animationRunning;
  }
});


animate();
