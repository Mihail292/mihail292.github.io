
var curva=[];
var LookTarget=false;
function CreateCurva() {CurveRemove();LookTarget=false;time1=0;time2=0.00;
curva['seredina']=new THREE.Vector3( (targetDrom.x-bee.position.x)/2+bee.position.x, (targetDrom.y-bee.position.y)/2+bee.position.y, (targetDrom.z-bee.position.z)/2+bee.position.z);
curva['curve'] = new THREE.CatmullRomCurve3( 
	[bee.position,curva['seredina'],new THREE.Vector3(targetDrom.x,targetDrom.y+20,targetDrom.z),targetDrom]);
curva['points'] = curva['curve'].getPoints(100);
curva['geometry'] = new THREE.Geometry().setFromPoints( curva['points'] );
curva['material'] = new THREE.LineBasicMaterial( { color : 'red', visible : true} );
curva['curveObject'] = new THREE.Line(curva['geometry'],curva['material']);
scene.add(curva['curveObject']);
CreateCurva2();};

function CreateCurva2() {
bee.getObjectByName('centrr').getWorldPosition(cursor.position);	
curva['cursor']=new THREE.Vector3().copy(cursor.position);
curva['begin']=new THREE.Vector3().copy(cursor.position);
curva.vector=new THREE.Vector3().subVectors(curva['cursor'],bee.position);
curva['begin'].x+=curva.vector.x*50;
curva['begin'].y+=curva.vector.y*50;
curva['begin'].z+=curva.vector.z*50;
curva['seredina2']=new THREE.Vector3( (targetDrom.x-curva['begin'].x)/2+curva['begin'].x, 
(targetDrom.y-curva['begin'].y)/2+curva['begin'].y, (targetDrom.z-curva['begin'].z)/2+curva['begin'].z);
curva['curve2'] = new THREE.CatmullRomCurve3([curva['begin'],curva['seredina2'], 
	new THREE.Vector3( targetDrom.x, targetDrom.y+10, targetDrom.z),targetDrom]);
curva['points2'] = curva['curve2'].getPoints(100);
curva['geometry2'] = new THREE.Geometry().setFromPoints(curva['points2']);
curva['material2'] = new THREE.LineBasicMaterial( { color : 'red', visible : true} );
curva['curveObject2'] = new THREE.Line(curva['geometry2'],curva['material2']);
scene.add(curva['curveObject2']);
curva['cursor'].copy(curva['curve'].getPoint(0.005));
LookTarget=true;
CreateCurva3();};

function CreateCurva3() {
	


curva['curve3'] = new THREE.CatmullRomCurve3( [
cursor.position,
curva['curve'].getPoint(0.005)
] );

curva['points3'] = curva['curve3'].getPoints(1);
curva['geometry3'] = new THREE.Geometry().setFromPoints( curva['points3'] );

curva['material3'] = new THREE.LineBasicMaterial( { color : 'red', visible : true} );

curva['curveObject3'] = new THREE.Line(curva['geometry3'],curva['material3']);


scene.add(curva['curveObject3']);
curva['remove']=false;

//setTimeout(function() {curva['curveObject'].visible=false;}, 1000);

	};

function CurveRemove(){
if(curva['curveObject']){scene.remove(curva['curveObject'])};
if(curva['curveObject2']){scene.remove(curva['curveObject2'])};
if(curva['curveObject3']){scene.remove(curva['curveObject3'])};
curva['remove']=true;
};