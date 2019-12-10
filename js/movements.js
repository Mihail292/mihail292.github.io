

function movements(){

if (keyboard['left']==true){bee.getObjectByName('centrr').getWorldPosition(cursor.position);bee.rotateY(Math.PI/32);};
if (keyboard['right']==true){bee.getObjectByName('centrr').getWorldPosition(cursor.position);bee.rotateY(-Math.PI/32);};
if (keyboard['forward']==true){observation();keyboard['drom']=false;
	bee.getObjectByName('centrr').getWorldPosition(cursor.position);
	aura.vector=new THREE.Vector3().subVectors(cursor.position,aura.position);
	aura.vector.normalize();


	aura.position.x+=aura.vector.x*2;
	aura.position.y+=aura.vector.y*2;
	aura.position.z+=aura.vector.z*2;

	cursor.position.x+=aura.vector.x*2;
	cursor.position.y+=aura.vector.y*2;
	cursor.position.z+=aura.vector.z*2;

	bee.position.x+=aura.vector.x*2;
	bee.position.y+=aura.vector.y*2;
	bee.position.z+=aura.vector.z*2;

	camera.lookAt(bee.position);
	};

if (keyboard['backwards']==true){observation();keyboard['drom']=false;
	bee.getObjectByName('centrr').getWorldPosition(cursor.position);
	aura.vector=new THREE.Vector3().subVectors(cursor.position,aura.position);
	aura.vector.normalize();

	aura.position.x-=aura.vector.x*2;
	aura.position.y-=aura.vector.y*2;
	aura.position.z-=aura.vector.z*2;

	cursor.position.x-=aura.vector.x*2;
	cursor.position.y-=aura.vector.y*2;
	cursor.position.z-=aura.vector.z*2;

	bee.position.x-=aura.vector.x*2;
	bee.position.y-=aura.vector.y*2;
	bee.position.z-=aura.vector.z*2;

}

if (keyboard['vertical_lift']==true){observation();aura.position.y+=2;cursor.position.y+=2;bee.position.y+=2};
if (keyboard['vertical_descent']==true){observation();aura.position.y-=2;cursor.position.y-=2;bee.position.y-=2};
if (keyboard['vestibularity']==true && keyboard['backwards']!=true && keyboard['forward']!=true){bee.getObjectByName('centrr').getWorldPosition(cursor.position);
cursor.vector=new THREE.Vector3().subVectors(cursor.position,bee.position);
	cursor.vector.normalize();
	cursor.position.y=bee.position.y;
	cursor.position.x+=cursor.vector.x*2;
	cursor.position.z+=cursor.vector.z*2;
	bee.lookAt(cursor.position);

	keyboard['vestibularity']=false};
if (keyboard['lookup']==true){bee.getObjectByName('centrr').getWorldPosition(cursor.position);bee.rotateX(-Math.PI/128); alf-=1};
if (keyboard['lookdown']==true){bee.getObjectByName('centrr').getWorldPosition(cursor.position);bee.rotateX(Math.PI/128); alf+=1};

if (keyboard['fall']==true){observation();cursor.position.y-=3.5;aura.position.y-=3.5;bee.position.y-=3.5};
if (keyboard['drom']==true && curva['remove']!=true){drom();observation();};
if (pyl['play']==true){drom666()};
//if (keyboard['drom']==true){drom666()};


if (LookTarget==true){LookTargets();};

};



var time1=0;
function drom(){
	//if (time1==0){bee.targ=new THREE.Vector3().copy(bee.position);
	//controls.target=bee.targ;};
LookTarget=false;time2=0.00;
	
 if (targetDrom && bee.position.distanceTo(targetDrom)>3){
 	aura.position.copy(curva['curve'].getPoint(time1));
	bee.getObjectByName('centrr').getWorldPosition( cursor.position );
	bee.position.copy(curva['curve'].getPoint(time1));
	camera.lookAt(bee.position);

	time1+=0.01;
	if (time1<0.1){time1+=0.02;};
	//if (time1>0.5){time1+=0.005;};
	//if (time1>0.8){time1+=0.005;};
	if (bee.position.distanceTo(targetDrom)>35){bee.lookAt(targetDrom);
		targetDromPref=targetDrom;
	};
	//if (bee.position.distanceTo(targetDrom)<10){keyboard['vestibularity']=true};
	


};


if (targetDrom && bee.position.distanceTo(targetDrom)<=3){
clones[nameOfClon].children[1].material=new THREE.MeshBasicMaterial;
clones[nameOfClon].children[1].material.vertexColors=2;
clones[nameOfClon].children[1].material.side=THREE.DoubleSide;
if(clones[nameOfClon].sbor!=0){clones[nameOfClon].sbor=0; pyl['play']=true;oceanAmbientSound.play();
score+=1;document.getElementById('rayinfo2').innerHTML=score;};
//if(pyl['sobr']!=true)
bee.getObjectByName('centrr').getWorldPosition( cursor.position );
keyboard['vestibularity']=true;

	keyboard['drom']=false; LookTarget=false;time2=0.00;};

};

var time2=0.00;
function LookTargets(){
	if (LookTarget==true){
	
	if (bee.position.distanceTo(targetDrom)>15 ){
		curva['begin'].copy(curva['curve2'].getPoint(time2));
		if (time2<0.9){
		cursor.position.copy(curva['curve3'].getPoint(time2));
		

		
		cursor.lookAt(bee.position)};
		time2+=0.05;
	//if (curva['point2']<0.9){console.log('ggg')};
	if (time2<0.7)bee.lookAt(curva['begin'])};
	if (time2>0.9){LookTarget=false;time2=0.00;};
};

};

var time3=0;var score=0;
function drom666(){

if (pyl['ok']!=true){createPyl()};

if (time3<25){
for ( var i = 0; i < pyl['msh'].geometry.vertices.length; i ++ ) {
pyl['msh'].geometry.vertices[i].x-=pylV[i].x/2;
pyl['msh'].geometry.vertices[i].y+=pylV[i].y+THREE.Math.randInt(-2,4);
pyl['msh'].geometry.vertices[i].z-=pylV[i].z/2;
};};

if (time3<46){
for ( var i = 0; i < pyl['msh'].geometry.vertices.length; i ++ ) {
//pyl['msh'].geometry.vertices[i].x-=pylV[i].x/4;
pyl['msh'].geometry.vertices[i].y-=pylV[i].y+THREE.Math.randInt(-1,3);
//pyl['msh'].geometry.vertices[i].z-=pylV[i].z/4;

};};
//if (time3>46){pyl['msh'].visible=false};

//new THREE.Vector3().subVectors(pyl['vector'] , pyl['pos'] )


pyl['msh'].geometry.verticesNeedUpdate=true;
time3++;
pyl['msh'].material.opacity-=1/46;


if (time3>47){time3=0; pyl['play']=false; pyl['ok']=false;scene.remove(pyl['msh']);oceanAmbientSound.stop();
			}};


