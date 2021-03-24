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
  //camera.layers.enable(1);


  scene = new THREE.Scene();//scene.background=texture;




  renderer = new THREE.WebGLRenderer( { antialias: false } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
 //renderScene = new THREE.RenderPass( scene, camera )

//effectFXAA = new THREE.ShaderPass( THREE.FXAAShader )
//effectFXAA.uniforms.resolution.value.set( 1 / window.innerWidth, 1 / window.innerHeight )



  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.zoomSpeed=3;
  controls.keys=0;
  controls.mouseButtons.RIGHT=1000;






meshes();
loads();

  animate();


  };

function loads(){




}
const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        // . . .
    },
  //  vertexShader:   document.getElementById('sphere-vertex-shader').textContent,
  //  fragmentShader: document.getElementById('sphere-fragment-shader').textContent
});


var plane,plane2;var material2,material3;
function meshes(){
var geometry = new THREE.SphereBufferGeometry( 4, 8, 8 );
var material = new THREE.MeshPhongMaterial();
material2 = new THREE.MeshPhongMaterial({color:'red'});
material3 = new THREE.MeshPhongMaterial({color:'yellow'});
material3.emissive.setRGB(0.46,0.6,0.77);

material3.emissiveIntensity=1.5;
plane = new THREE.Mesh( geometry, material );
scene.add( plane );

var geometry2 = new THREE.SphereBufferGeometry( 0.5, 24, 12 );
plane2 = new THREE.Mesh( geometry2, material2 );

scene.add( plane2 );
//plane.position.z=-10;plane.position.y=5;
lights= new THREE.SpotLight();
lights.position.z=20;
lights.color.setRGB(0,0.612,0.57);
lights2= new THREE.SpotLight();
lights2.position.z=-20;
lights2.color.setRGB(0.07,0.26,0.67);
scene.add(lights,lights2);
camera.position.z=-70;
controls.target=plane.position;

camera.lookAt(plane.position)
plane.material.emissive.setRGB(0.45,0.67,0.75);
plane.material.emissiveIntensity=1.5;
plane2.material.emissiveIntensity=1;plane2.material.emissive.setRGB(0.46,0.6,0.77);




}

const curve1 = new THREE.SplineCurve( [
new THREE.Vector2( 10, 0 ),
new THREE.Vector2( 5, 5 ),
new THREE.Vector2( 10, 10 ),
 new THREE.Vector2( 20, -10 ),
 new THREE.Vector2( -0, -10 ),
  new THREE.Vector2( -10, -5 ),
  new THREE.Vector2( -20, -10 ),
  new THREE.Vector2( -15, 10 ),
  new THREE.Vector2( -10, 0 ),
	new THREE.Vector2( -5, 5 ),
	new THREE.Vector2( 0, 0 ),
	new THREE.Vector2( 5, -5 ),
	new THREE.Vector2( 10, 0 )
] );

const curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	5, 5,           // xRadius, yRadius
	-Math.PI/6-Math.PI/6, Math.PI/2, // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);
            var points = curve.getPoints( 50 );
var pointsCurve = curve1.getPoints( 1000 );
            var geometry = new THREE.Geometry().setFromPoints( points );
var geometryCurve1 = new THREE.Geometry().setFromPoints( pointsCurve );
            var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

            // Create the final object to add to the scene
            curveObject = new THREE.Line( geometry, material );
            curveObject1 = new THREE.Line( geometryCurve1 , material );

            //scene.add( curveObject1 );

            curveObject.curve = curve;curveObject1.curve = curve1;
				plane2.position.set(curveObject.geometry.vertices[0].x,curveObject.geometry.vertices[0].y,curveObject.geometry.vertices[0].z);
        var ufo;
        var loader = new THREE.GLTFLoader();
         loader.load( '/nlo.glb', function ( load ) {
           ufo=load;
           ufo.scene.getObjectByName('Сфера').material=material3;
           ufo.scene.getObjectByName('Икосфера').material=material3;
           ufo.scene.getObjectByName('Torus001').material=material3;
           ufo.scene.getObjectByName('Torus002').material=material3;
           ufo.scene.getObjectByName('Torus003').material=material3;
           ufo.scene.getObjectByName('Torus004').material=material3;
           ufo.scene.getObjectByName('Сфера003').material= new THREE.MeshLambertMaterial({});
           ufo.scene.getObjectByName('Сфера003').material.color.setRGB(0.95,0.98,0);
           //ufo.scene.scale.set(1.5,1.5,1.5);
           scene.add(ufo.scene);
         });




        var t=1000;
        var tt=50;
        var tuda=true;
        var suda=false;
          function animate() {
            requestAnimationFrame( animate);
if(ufo){
  ufo.scene.position.set(curveObject1.geometry.vertices[t].x,curveObject1.geometry.vertices[t].y,curveObject1.geometry.vertices[t].z);t--;if(t==0){t=1000}}
         if(tuda){plane2.position.set(curveObject.geometry.vertices[tt].x,curveObject.geometry.vertices[tt].y,curveObject.geometry.vertices[tt].z);tt--;if(tt==0){tuda=false;suda=true}};
         if(suda){plane2.position.set(curveObject.geometry.vertices[tt].x,curveObject.geometry.vertices[tt].y,curveObject.geometry.vertices[tt].z);tt++;if(tt==50){suda=false;tuda=true}}
    renderer.render(scene, camera);
    //const composer = new EffectComposer( renderer );

}
