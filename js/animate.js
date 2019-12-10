
var mixer;
var clock = new THREE.Clock();

function animate() {
requestAnimationFrame( animate);




raycaster2.setFromCamera( mouse, camera);
intersects2 = raycaster2.intersectObjects( selects2, false);


raycaster.setFromCamera( mouse, camera);
intersects = raycaster.intersectObjects( selects, false);
	
var delta = clock.getDelta();

	if (mixer) mixer.update(delta);





if (com['walk']==true) {

ms['control'].position.copy(crv['crv'].getPoint(t[0])); 
t[0]+=ms['control'].speed/4;
info2('o');
if (ms['control'].position.distanceTo(ms['kubik2'].position)<=ms['control'].rad){com['walk']=false; t[0]=0; }};

if (com['rotate']==true){
	t[1]++;
	ms.control.lookAt(crv['crv2'].getPoint(t[1]/50));
	//if (t[1]>30){com['walk']=true};
	if (t[1]>50){com['rotate']=false; t[1]=0; com['walk']=true; info4('okey')};//;

};



	
renderer.render( scene, camera );
};

function info(info){
document.getElementById('info').innerHTML=info;
}
function info2(info){
document.getElementById('info2').innerHTML=info;
}
function info3(info){
document.getElementById('info3').innerHTML=info;
}
function info4(info){
document.getElementById('info4').innerHTML=info;
}