
var raycaster = new THREE.Raycaster();raycaster.far=1000;
var mouse = new THREE.Vector2();
var selects=[];
var intersects;
window.addEventListener( 'mousemove', onMouseMove, false );
	function onMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	
};
