var bee,body,mixer;var left;
var clips=[];
function createBee() {
var loader = new THREE.FBXLoader();
loader.load( 'models/bee4.fbx', function ( object ) {
bee = object;
bee.position.set(0,0, 0);
controls.target=bee.position;
//controls.target=bee.position;
camera.position=bee.position;
camera.position.x=bee.position.x+15;
camera.lookAt(bee.position);
bee.name='beee';
body=bee.getObjectByName('bee');

bee.getObjectByName('wings').material.side=THREE.DoubleSide;
bee.getObjectByName('wings').material.transparent=true;
bee.getObjectByName('wings').material.opacity=0.5;
bee.getObjectByName('centrr').visible=false;
bee.getObjectByName('leftt').visible=false;
bee.getObjectByName('rightt').visible=false;
left=bee.getObjectByName('leftt').position;
body.material=new  THREE.MeshBasicMaterial;
body.material.vertexColors=2;
body.material.side=THREE.DoubleSide;
body.material.skinning=true;

scene.add(bee);
createcursor();




mixer = new THREE.AnimationMixer( bee );

clips['wings']=mixer.clipAction( THREE.AnimationClip.findByName( bee.animations, 'wings' )).play();
clips['wings'].timeScale=2;
clips['usy']=mixer.clipAction( THREE.AnimationClip.findByName( bee.animations, 'usy' )).play();
clips['usy'].timeScale=0.7;
clips['hed']=mixer.clipAction( THREE.AnimationClip.findByName( bee.animations, 'hed' )).play();
clips['hed'].timeScale=0.5;
clips['gop']=mixer.clipAction( THREE.AnimationClip.findByName( bee.animations, 'gop' )).play();
clips['gop'].timeScale=0.5;
clips['laps']=mixer.clipAction( THREE.AnimationClip.findByName( bee.animations, 'laps' )).play();
clips['laps'].timeScale=0.3;

				});};
