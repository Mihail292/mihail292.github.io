function fs(PECH){

const sa=document.getElementById("but").onclick=function()
		{const text=JSON.stringify(PECH);
		 const blob = new Blob([text], {type: "text/plain;charset=utf-8"});
			const anchor = document.createElement('a');
		anchor.download ="file.txt";
		anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
		anchor.dataset.downloadurl = ['text/plain', anchor.href].join(':');
		anchor.click();
		};
		window.addEventListener( 'mousemove', onMouseMove, false );
	};