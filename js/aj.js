		var ppp;
		function conneht(){
		var aj = new XMLHttpRequest();
		aj.open('GET', 'http://t151019/nd.php?'+"подгрузи новые данные",true);
		aj.onreadystatechange = function(){
		if(aj.readyState ==4 && aj.status == 200){ ppp=aj.responseText;}
		};
		aj.send();
		};
		