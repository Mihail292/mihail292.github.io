var keyboard=[];


window.addEventListener( 'keydown', KeyboardDOWN, false );
window.addEventListener( 'keyup', KeyboardUP, false );
document.addEventListener( "click", click, false );


function KeyboardDOWN(){
//console.log(event.keyCode);
if (event.keyCode==65){keyboard['left']=true;LookTarget=false;CurveRemove();};
if (event.keyCode==68){keyboard['right']=true;LookTarget=false;CurveRemove();};
if (event.keyCode==87){keyboard['forward']=true;LookTarget=false;CurveRemove();};
if (event.keyCode==83){keyboard['backwards']=true;LookTarget=false;CurveRemove();};
if (event.keyCode==84){keyboard['vertical_lift']=true;LookTarget=false;CurveRemove();};
if (event.keyCode==71){keyboard['vertical_descent']=true;LookTarget=false;CurveRemove();};
if (event.keyCode==69){keyboard['vestibularity']=true;LookTarget=false;CurveRemove();};
if (event.keyCode==82){keyboard['lookup']=true;LookTarget=false;CurveRemove();};
if (event.keyCode==70){keyboard['lookdown']=true;LookTarget=false;CurveRemove();};
if (event.keyCode==32){keyboard['drom']=true;LookTarget=false;};
if (event.keyCode==81){CurveRemove();LookTarget=false;if(keyboard['fall']!=true){keyboard['fall']=true}else{keyboard['fall']=false}};
};

function KeyboardUP(){
if (event.keyCode==65)keyboard['left']=false;
if (event.keyCode==68)keyboard['right']=false;
if (event.keyCode==87){keyboard['forward']=false;bee.lookAt(cursor.position);}
if (event.keyCode==83){keyboard['backwards']=false;bee.lookAt(cursor.position);}
if (event.keyCode==84)keyboard['vertical_lift']=false;
if (event.keyCode==71)keyboard['vertical_descent']=false;
if (event.keyCode==69)keyboard['vestibularity']=false;
if (event.keyCode==82)keyboard['lookup']=false;
if (event.keyCode==70)keyboard['lookdown']=false;
if (event.keyCode==32)keyboard['drom']=false;
};
var targetDrom,targetDromPref;
var nameOfClon;
function click() {
if (intersects && intersects.length>0){
targetDrom=new THREE.Vector3(intersects[0].object.parent.position.x,intersects[0].object.parent.position.y,intersects[0].object.parent.position.z);
nameOfClon=intersects[0].object.parent.name;
CreateCurva();keyboard['drom']=true;
//document.getElementById('rayinfo1').innerHTML=nameOfClon;
}};
