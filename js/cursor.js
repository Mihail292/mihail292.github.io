var aura, cursor;
var alf=0;
var alf2=0;
function createcursor() {
aura=new THREE.Mesh(new THREE.BoxGeometry(33,33,33),new THREE.MeshBasicMaterial({ color: 'red', wireframe: true}));
aura.visible=false;
aura.position.set(bee.position.x,bee.position.y,bee.position.z);
scene.add(aura);

cursor = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({ color: 'red', wireframe: false}));
cursor.visible=false;
cursor.position.y=bee.position.y;
cursor.position.x=bee.position.x+Math.sin(Math.PI*alf/180)*1;
cursor.position.z=bee.position.z+Math.cos(Math.PI*alf/180)*1;
bee.lookAt(cursor.position);
scene.add(cursor);
};


