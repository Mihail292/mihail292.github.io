var raycaster = new THREE.Raycaster();raycaster.far=20;
var raycaster2 = new THREE.Raycaster();raycaster2.far=200;
var raycaster3 = new THREE.Raycaster();
var line, line2, angle;
var unit;var clips;
var dir, origin, length, hex, arrowHelper;
const x=new THREE.Vector3( 1, 0, 0);
const y=new THREE.Vector3( 0, 1, 0);
const z=new THREE.Vector3( 0, 0, 1);
var mouse = new THREE.Vector2();
mouse.x=1;
mouse.y=1;
var selects=[];var selects2=[];var selects3=[];
var intersects;var intersects2;var intersects3;
var ms=[];ms['control']=0;
var crv=[];
p=Math.PI;
var g=p/180;//0.0174533
var r=180/p;//57.2958

var t=[];for (t.i=0; t.i<10; t.i++){t.push(0);}
var com=[];

function init() {
				camera = new THREE.PerspectiveCamera( 70, 607 / 500, 1, 100000);
				camera.position.set(-3.7,3.15,10.21);
				camera.position.set(-2.34,0.854,5.2701);
				camera.position.set(-0.4794080197622761, 0.7325266157002019,1.5891770600042139);
				scene = new THREE.Scene();
				//scene.background = new THREE.Color("#1b7765");


				light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
				light.position.set(0, 100, 0);
				scene.add(light);
				light = new THREE.DirectionalLight(0xffffff, 1.0);
				light.position.set(0, 10, 0);
				scene.add(light);

				createPol();
				//cModel();
				//createKub();
				createKub2();







				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( 607, 500 );
				document.body.appendChild( renderer.domElement );
				controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.zoomSpeed=3;
				controls.minDistance=5;
				controls.maxDistance=300;
				controls.keys=0;

				window.addEventListener( 'keydown', KeyboardDOWN, false );
				window.addEventListener( 'keyup', KeyboardUP, false );
				document.addEventListener( "click", click, false );
				window.addEventListener( 'resize', onWindowResize, false );
				window.addEventListener( 'mousemove', onMouseMove, false );
				function onMouseMove( event ) {
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;};

			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
