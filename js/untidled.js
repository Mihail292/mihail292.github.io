pyl['g'].vertices.forEach( function(particle){
particle.x+=pyl['vector'].x/100;
particle.y+=pyl['vector'].y/100;
particle.z+=pyl['vector'].z/100;
});
starsGeometry.verticesNeedUpdate=true;

var gr, grmixer; var grclones=[];
function createGr() {
var loader = new THREE.FBXLoader();
loader.load( 'models/gr.fbx', function ( object ) {
gr = object;

gr.children.forEach(function(element) {
element.material=new  THREE.MeshBasicMaterial;
element.material.vertexColors=2;
element.material.side=THREE.DoubleSide});


//objs.push(land.getObjectByName('zemlya'));
gr.position.y=-690;gr.scale.set(7,7,7);

				  scene.add(gr);
for (i=0; i<500; i++){grclones[i]=gr.clone();
	grclones[i].position.x+=rnd()*rnd();
  grclones[i].position.z+=rnd()*rnd();
	grclones[i].position.y+=rnd()/5;
	grclones[i].rotateY(Math.PI/(rnd()/20));
	grclones[i].name=i;
	//clones[i].visible=false;
//	clones[i].rotateZ(Math.PI/(rnd()/20));
//	clones[i].rotateX(Math.PI/(rnd()/20));
	scene.add(grclones[i]); }

grmixer = new THREE.AnimationMixer( gr );

clips['grr']=grmixer.clipAction( THREE.AnimationClip.findByName( gr.animations, 'CubeAction' )).play();
clips['grr'].timeScale=0.02;
				  //createBlower();

;});};


<div id="ray" style="position:absolute;
    margin-top:-3/2px;font-family:arial;font-size:30px;color:#ffff00;"><span id="rayinfo1">Выбранное</span></div>