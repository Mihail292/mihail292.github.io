var scene;
const texture = new THREE.TextureLoader().load( '3.jpg' );
function textureFilter(a) {
a.minFilter = THREE.LinearFilter;
a.magFilter = THREE.LinearFilter;
a.format = THREE.RGBFormat;
}

document.onload=init();
  function init() {

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 50000);
  camera.layers.enable(1);
	

  scene = new THREE.Scene();//scene.background=texture;




  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
 renderScene = new THREE.RenderPass( scene, camera )
	
//effectFXAA = new THREE.ShaderPass( THREE.FXAAShader )
//effectFXAA.uniforms.resolution.value.set( 1 / window.innerWidth, 1 / window.innerHeight )
	
bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 )
bloomPass.threshold = 0.21
bloomPass.strength = 1.2
bloomPass.radius = 0.55
bloomPass.renderToScreen = true
	
composer = new THREE.EffectComposer( renderer )
composer.setSize( window.innerWidth, window.innerHeight )
	
composer.addPass( renderScene )
//composer.addPass( effectFXAA )
composer.addPass( bloomPass )
	
renderer.gammaInput = true
renderer.gammaOutput = true
renderer.toneMappingExposure = Math.pow( 0.9, 4.0 ) 

  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.zoomSpeed=3;
  controls.keys=0;
  controls.mouseButtons.RIGHT=1000;



	
 

meshes();
loads();

  animate();


  };
function meshes(){
var geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
var sphere = new THREE.Mesh( geometry, material ); scene.add( sphere );
}

  function animate() {
    requestAnimationFrame( animate);
    
 
    
    composer.render(scene, camera);
    //const composer = new EffectComposer( renderer );

}
