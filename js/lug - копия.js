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

//selects.push(land.getObjectByName('zemlya'));

				  scene.add(land);
;});};
