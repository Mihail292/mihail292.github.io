var clock = new THREE.Clock();
var time=0;

function animate() {


	requestAnimationFrame( animate);

	var delta = clock.getDelta();
	if (mixer) mixer.update(delta);
	
	movements();
	raycaster.setFromCamera( mouse, camera );
	intersects = raycaster.intersectObjects( selects, true);
	nevidimost(500);
	vidimost(500);
	nevidimost2(2000);
	vidimost2(2000);
	
	renderer.render( scene, camera );
	};
