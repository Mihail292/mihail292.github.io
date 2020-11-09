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
  
	

  scene = new THREE.Scene();//scene.background=texture;




  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );



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



var plane,plane2;
function meshes(){
var geometry = new THREE.SphereBufferGeometry( 4, 64, 64 );
var material = new THREE.MeshPhongMaterial();
var material2 = new THREE.MeshPhongMaterial({color:'red'});
plane = new THREE.Mesh( geometry, material );
scene.add( plane );

var geometry2 = new THREE.SphereBufferGeometry( 0.5, 24, 12 );
plane2 = new THREE.Mesh( geometry2, material2 );

scene.add( plane2 );
//plane.position.z=-10;plane.position.y=5;
lights= new THREE.SpotLight();
lights.position.z=-15;
lights.color.setRGB(0,6,2);

scene.add(lights);
camera.position.z=-70;
controls.target=plane.position;

camera.lookAt(plane.position)
plane.material.emissive.setRGB(0.45,0.67,0.75);
plane.material.emissiveIntensity=1.5;
plane2.material.emissiveIntensity=1;plane2.material.emissive.setRGB(0.46,0.6,0.77);




}

const curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	5, 5,           // xRadius, yRadius
	Math.PI/2, 2* Math.PI/2, // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);

            var points = curve.getPoints( 50 );

            var geometry = new THREE.Geometry().setFromPoints( points );

            var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

            // Create the final object to add to the scene
            curveObject = new THREE.Line( geometry, material );

            //scene.add( curveObject );

            curveObject.curve = curve;
				plane2.position.set(curveObject.geometry.vertices[0].x,curveObject.geometry.vertices[0].y,curveObject.geometry.vertices[0].z);
var t=0;
var tuda=true;
var suda=false;
  function animate() {
    requestAnimationFrame( animate);
    
  if(tuda){plane2.position.set(curveObject.geometry.vertices[t].x,curveObject.geometry.vertices[t].y,curveObject.geometry.vertices[t].z);t++;if(t==50){tuda=false;suda=true}};
  if(suda){plane2.position.set(curveObject.geometry.vertices[t].x,curveObject.geometry.vertices[t].y,curveObject.geometry.vertices[t].z);t--;if(t==0){suda=false;tuda=true}}
    renderer.render( scene, camera );
    
    //const composer = new EffectComposer( renderer );

}