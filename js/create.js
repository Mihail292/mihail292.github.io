
var lis;var l;var scena;var clips2;
function cModel() {
var loader = new THREE.GLTFLoader();
loader.load( 'models/untitled.glb', function ( load ) {
l = load;/*
scena=l.scene;
lis=l.scene.children[0];
//lis.material=o[0];

lis.children[0].material=new THREE.MeshLambertMaterial();
lis.children[0].material.color.setHex(4722689);
lis.children[1].material=new THREE.MeshPhongMaterial();
lis.children[1].material.color.setHex(10682625);
lis.children[2].material=new THREE.MeshPhongMaterial();
lis.children[2].material.color.setHex(0);
lis.children[3].material=new THREE.MeshPhongMaterial();
lis.children[3].material.color.setHex(5000268);


mixer = new THREE.AnimationMixer(l.scene);
clips=mixer.clipAction(l.animations[0]).play();
scene.add(lis);

l.scene.getChildByName('resn').children[0].material.side=2;
l.scene.getChildByName('resn').children[1].material.side=2;
l.scene.getChildByName('resn').children[2].material.side=2;
l.scene.getChildByName('resn').children[3].material.side=2;
l.scene.getChildByName('resn').children[4].material.side=2;
l.scene.getChildByName('resn').children[5].material.side=2;
*/
for (i=0;i<6;i++){l.scene.getObjectByName('resn').children[i].material.side=2};
mixer = new THREE.AnimationMixer(l.scene);
clips=mixer.clipAction(l.animations[0]).play();clips.timeScale=0.25;
clips2=mixer.clipAction(l.animations[1]).play();clips2.timeScale=0.25;

scene.add(l.scene);
				});};




function cCursor(){
ms['control'].dist=ms['control'].position.distanceTo(ms['kubik2'].position);
cSpeed ();

ms['cursor']=new THREE.Mesh(new THREE.BoxGeometry( 0.1, 0.1,0.1 ),new THREE.MeshBasicMaterial( {color: 'blue', side: THREE.DoubleSide}));
ms['cursor'].position.copy(ms['control'].position);
ms['cursor'].quaternion.copy(ms['control'].quaternion);
ms['cursor'].translateOnAxis(z,1);

scene.add(ms['cursor']);

ms['cursor2']=new THREE.Mesh(new THREE.BoxGeometry( 0.1, 0.1,0.1 ),new THREE.MeshBasicMaterial( {color: 'blue', side: THREE.DoubleSide}));
ms['cursor2'].position.copy(ms['control'].position);
ms['cursor2'].quaternion.copy(ms['control'].quaternion);
ms['cursor2'].translateOnAxis(x,-2);

scene.add(ms['cursor2']);

ms['cursor3']=new THREE.Mesh(new THREE.BoxGeometry( 0.1, 0.1,0.1 ),new THREE.MeshBasicMaterial( {color: 'blue', side: THREE.DoubleSide}));
ms['cursor3'].position.copy(ms['control'].position);
ms['cursor3'].quaternion.copy(ms['control'].quaternion);
ms['cursor3'].translateOnAxis(x,2);

scene.add(ms['cursor3']);



}
function cSpeed (){
if (ms['control'].dist>1){ms['control'].speed=ms['control'].etdist/ms['control'].dist*ms['control'].etshag;info(ms['control'].speed);}
if (ms['control'].dist<=1){ms['control'].speed=ms['control'].etshag;info(ms['control'].speed);}
};
function crvRemove(){
scene.remove(crv.crvLine2, crv.crv2, crv.crvLine, crv.crv2);
};
function cWay(){
t[0]=0;
t[1]=0;
com['rotate']=false;com['walk']=false;
cCursor();
al();
cRay3();
crvRemove();
//crv=[];

if (angle<2){
crv['crv2'] = new THREE.CatmullRomCurve3( [
ms['cursor'].position,
ms['kubik2'].position
] );}

if (angle>=2 && ms['cursor2'].position.distanceTo(ms['kubik2'].position)>=ms['cursor3'].position.distanceTo(ms['kubik2'].position)){

crv['crv2'] = new THREE.CatmullRomCurve3( [
ms['cursor'].position,
ms['cursor3'].position,
ms['kubik2'].position
] );}

if (angle>=2 && ms['cursor3'].position.distanceTo(ms['kubik2'].position)>ms['cursor2'].position.distanceTo(ms['kubik2'].position)){
crv['crv2'] = new THREE.CatmullRomCurve3( [
ms['cursor'].position,
ms['cursor2'].position,
ms['kubik2'].position
] );}


crv['crv'] = new THREE.CatmullRomCurve3( [
ms['control'].position,
ms['kubik2'].position
] );

crv['points'] = crv['crv'].getPoints(10);
crv['geometry'] = new THREE.Geometry().setFromPoints( crv['points'] );
crv['material'] = new THREE.LineBasicMaterial( { color : 'red', visible : true} );
crv['crvLine'] = new THREE.Line(crv['geometry'],crv['material']);
scene.add(crv['crvLine']);

crv['points2'] = crv['crv2'].getPoints(10);
crv['geometry2'] = new THREE.Geometry().setFromPoints( crv['points2'] );
crv['material2'] = new THREE.LineBasicMaterial( { color : 'red', visible : true} );
crv['crvLine2'] = new THREE.Line(crv['geometry2'],crv['material2']);
scene.add(crv['crvLine2']);


//ms['control'].lookAt(crv['crv'].getPoint(t[1]));


//com['walk']=true;
com['rotate']=true;
};
function cRay3(){
raycaster3.far=ms.control.dist;
ms.control.vectorRay3=new THREE.Vector3().subVectors(ms.kubik2.position, ms.control.position).normalize();
raycaster3.set( ms.control.position,ms.control.vectorRay3);
intersects3 = raycaster3.intersectObjects( selects3, false);
if (intersects3.length) cK4();
ms.inter3=intersects3;
}
function cK4(){
//ms['kubik4']=new THREE.Mesh(new THREE.BoxGeometry( 0.1, 0.1,0.1 ),new THREE.MeshBasicMaterial( {color: 'red', side: THREE.DoubleSide}));
ms['kubik2'].position.x=intersects3[0].point.x;
ms['kubik2'].position.y=intersects3[0].point.y;
ms['kubik2'].position.z=intersects3[0].point.z;

}
function createPol(){
ms['pol']=new THREE.Mesh(new THREE.PlaneGeometry( 10, 10 ),new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide}));
ms['pol'].rotation.x=-1.570796326794897;
scene.add(ms['pol']);

selects2.push(ms['pol']);
ms['pol'].name='pol';
}
function createkubik(){
ms['kubik']=new THREE.Mesh(new THREE.BoxGeometry( 0.1, 0.1,0.1 ),new THREE.MeshBasicMaterial( {color: 'red', side: THREE.DoubleSide}));
ms['kubik'].position.x=intersects[0].point.x;
ms['kubik'].position.y=intersects[0].point.y;
ms['kubik'].position.z=intersects[0].point.z;

scene.add(ms['kubik']);

}
function createkubik2(){
ms['kubik2']=new THREE.Mesh(new THREE.BoxGeometry( 0.1, 0.1,0.1 ),new THREE.MeshBasicMaterial( {color: 'green', side: THREE.DoubleSide}));
ms['kubik2'].position.x=intersects2[0].point.x;
ms['kubik2'].position.y=intersects2[0].point.y;
ms['kubik2'].position.z=intersects2[0].point.z;

scene.add(ms['kubik2']);

}
function createKub(){

ms['kub']=new THREE.Mesh(new THREE.BoxGeometry( 1, 1, 1 ),new THREE.MeshBasicMaterial( { }));
ms['kub'].position.y=0.5;

ms['kub'].name='Куб';
ms['kub'].etdist=1;
ms['kub'].etshag=0.05;
ms['kub'].rad=0.5;
ms['kub'].material.vertexColors=2;
ms['kub'].geometry.faces[9].color.setHex( 0x00ffff);



scene.add(ms['kub']);
selects.push(ms['kub']);
}
function createKub2(){
ms['kub2']=new THREE.Mesh(new THREE.BoxGeometry( 1, 1, 3 ),new THREE.MeshBasicMaterial( { }));
ms['kub2'].position.x=3;
ms['kub2'].position.z=3;
ms['kub2'].name='Куб2';
scene.add(ms['kub2']);
selects3.push(ms['kub2']);
}
function cHelper(){

//dir = new THREE.Vector3(ms['kub'].rotation.x,ms['kub'].rotation.y,ms['kub'].rotation.x);

dir = ms['kub'].up;

//normalize the direction vector (convert to vector of length 1)
dir.normalize();

 origin = ms['kub'].position;
 //origin = new THREE.Vector3( 0, 0, 1);
length = 1;
 hex = 0xf00f00;

 arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
scene.add( arrowHelper );

}
function al(){
line=new THREE.Vector3().subVectors(ms.control.position,ms.cursor.position);
line2=new THREE.Vector3().subVectors(ms.control.position,ms['kubik2'].position);
angle=line.angleTo(line2);
info3(angle)};
