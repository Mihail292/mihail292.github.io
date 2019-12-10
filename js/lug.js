
var land;
function createLug() {
var loader = new THREE.FBXLoader();
loader.load( 'models/lug.fbx', function ( object ) {
land = object;

land.getObjectByName('trava').material=new  THREE.MeshBasicMaterial;
land.getObjectByName('trava').material.vertexColors=2;
land.getObjectByName('trava').material.skinning=true;
land.getObjectByName('trava').material.side=THREE.DoubleSide;

land.getObjectByName('zemlya').material=new  THREE.MeshBasicMaterial;
land.getObjectByName('zemlya').material.vertexColors=2;
land.getObjectByName('zemlya').material.side=THREE.DoubleSide;

//objs.push(land.getObjectByName('zemlya'));
land.position.y=400;
				  scene.add(land);
				  //document.getElementById('div').style.display='none';
				  //createBlower();

;});};



var blower; var pyl=[]; var pylV=[];var pylV2=[];
function createPyl(){pyl['ok']=true;
pyl['g']=new THREE.SphereGeometry(3, 20, 20, 0, 2*Math.PI, Math.PI*2, Math.PI/2);
pyl['pos']=new THREE.Vector3;
pyl['pos'].copy(blower.getObjectByName('pl').position);

pyl['m'] = new THREE.PointsMaterial( { color: 'yellow',size:1, sizeAttenuation:false } );

pyl['msh']=new THREE.Points( pyl['g'], pyl['m'] );

for ( var i = 0; i < pyl['msh'].geometry.vertices.length; i ++ ) {
	pyl['vector']=new THREE.Vector3;
	pyl['vector'].copy(pyl['g'].vertices[i]);
	pylV.push( new THREE.Vector3().subVectors(pyl['vector'] , pyl['pos'] ));
	//pyl['vector'].normalize();
	//pylV.push( pyl['vector'] );
};
pyl['msh'].position.x=targetDrom.x;
pyl['msh'].position.y=targetDrom.y+20;

pyl['msh'].position.z=targetDrom.z;
pyl['msh'].material.transparent=true;
pyl['msh'].material.opacity=1;
scene.add(pyl['msh']);
};


function createBlower() {
var loader = new THREE.FBXLoader();
loader.load( 'models/cv3.fbx', function ( object ) {
blower = object;

blower.children.forEach(function(element) {
element.material=new  THREE.MeshBasicMaterial;
element.material.vertexColors=2;
element.material.side=THREE.DoubleSide});
blower.getObjectByName('pl').material.vertexColors=0;
blower.getObjectByName('pl').material.color=new THREE.Color( 'yellow' );

clons();
	  

;});};

function rnd(){
	var random =Math.ceil(Math.random()*100);
	if (Math.random()*50<25)random*=-1;
	return random;
}

function vidimost(x){
	for (i=0; i<clones.length; i++){
		if (bee.position.distanceTo(clones[i].position)<x){selects.push(clones[i]);};
		
	}};

	function nevidimost(x){
		for (i=0; i<clones.length; i++){
			if (bee.position.distanceTo(clones[i].position)>x){selects.splice(clones[i]);};
			clones[i].visible=false;
		}};

function vidimost2(x){
	for (i=0; i<clones.length; i++){
		if (camera.position.distanceTo(clones[i].position)<x){clones[i].visible=true;};
		
	}};

	function nevidimost2(x){
		for (i=0; i<clones.length; i++){
			if (camera.position.distanceTo(clones[i].position)>x){clones[i].visible=false;};
	}};



var clones=[];
function clons() {for (i=0; i<1000; i++){clones[i]=blower.clone();
	clones[i].position.x+=rnd()*rnd();
  clones[i].position.z+=rnd()*rnd();
	clones[i].position.y+=rnd()/5;
	clones[i].rotateY(Math.PI/(rnd()/20));
	clones[i].name=i;
	//clones[i].visible=false;
//	clones[i].rotateZ(Math.PI/(rnd()/20));
//	clones[i].rotateX(Math.PI/(rnd()/20));
	scene.add(clones[i]); }}

var obj=[];var texture;var geofaces=[];

function skybox(){
    const loader = new THREE.TextureLoader();
    const texture = loader.load(
      'img/field.jpg');
	obj['g']=new THREE.SphereBufferGeometry(60000,60,60);
	obj['m']=new THREE.MeshBasicMaterial({side: THREE.DoubleSide, map:texture});
	obj['o']=new THREE.Mesh(obj['g'],obj['m']);
	scene.add(obj['o']);
	
  }

