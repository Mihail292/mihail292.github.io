function init() {
				camera = new THREE.PerspectiveCamera( 70, 500 / 500, 1, 100000);
				camera.position.set(-3.7,3.15,10.21);

				scene = new THREE.Scene();
				//scene.background = new THREE.Color("#1b7765");


				light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
				light.position.set(0, 100, 0);
				scene.add(light);
				light = new THREE.DirectionalLight(0xffffff, 1.0);
				light.position.set(0, 1, 0);
				scene.add(light);

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( 500, 500 );
				document.body.appendChild( renderer.domElement );
				controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.zoomSpeed=3;
				controls.minDistance=10;
				controls.maxDistance=3000;
				controls.keys=0;
				
				
			}
			

function observation(){


camera.vector=new THREE.Vector3().subVectors(cursor.position,camera.position);
camera.vector.normalize();

if (camera.position.distanceTo(cursor.position)>299){
	camera.position.z+=camera.vector.z*3;
	//camera.position.y+=camera.vector.y*3;
	camera.position.x+=camera.vector.x*3;
}
if (camera.position.distanceTo(cursor.position)<30)camera.position.y-=camera.vector.y*2;

camera.lookAt(cursor.position);



};