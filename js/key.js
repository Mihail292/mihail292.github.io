function click() {

if (intersects2.length && ms['control']!=0) {createkubik2();
	
	cWay();}

if (intersects.length){
ms['control']=intersects[0].object.parent;info4('selected');console.log(intersects[0].object.parent);
createkubik();

}


};



function selectObject(){
}


function KeyboardDOWN(){
console.log(event.keyCode);
if (event.keyCode==81){ms['control']=0; info('clear');}//q
if (event.keyCode==80){clips.play();}//ъ
if (event.keyCode==221){clips.stop();}//ъ
if (event.keyCode==219){clips.paused=true;}//ъ
if (event.keyCode==222){clips.paused=false;}//ъ
if (event.keyCode==186){clips.reset();}//ъ


};

function KeyboardUP(){
//if (event.keyCode==87){t['stop']=true; t['w']=false;}

};