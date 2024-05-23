<!DOCTYPE html>
<html>
   <head></head> 
   <script>
       
		var ppp
       function conneht(t){
		var aj = new XMLHttpRequest();
		aj.open('GET', 'https://www.googleapis.com/youtube/v3/search?maxResults=50&part=snippet&key=AIzaSyDtgXVv39MVYBw6Jy_tGbLBpcTIvluewKY&type=video&q='+t,true);
		aj.onreadystatechange = function(){
		if(aj.readyState ==4 && aj.status == 200){ppp=JSON.parse(aj.responseText)}

		};
		aj.send();
		};
		
   </script>
   <body style="background-color: aquamarine;">


   </body>
</html>
