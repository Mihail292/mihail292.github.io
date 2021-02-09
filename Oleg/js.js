var a,b,c,d,e,f,g;
var t;
function createTile(H,O,A){
	a=document.createElement('DIV');
	document.body.append(a);a.id='ass';
	b=document.createElement('DIV');b.className='podkar';
	a.append(b);
	c=document.createElement('DIV');c.className='podtext';
	a.append(c);
	d=document.createElement('DIV');d.className='kartinka';
	b.append(d);
	e=document.createElement('DIV');e.className='hed';
	c.append(e);
	f=document.createElement('DIV');f.className='opis';
	c.append(f);
	g=document.createElement('DIV');g.className='kup';
	c.append(g);
	d.src=A;d.alt='alt';
	e.innerHTML=H;f.innerHTML=O;g.innerHTML='Купить';
}

function bClik(){
createTile(document.getElementById('iH').value,
	document.getElementById('iO').value,
	document.getElementById('iI').value)
}

function bClear(){
document.getElementById('iO').value=''
document.getElementById('iH').value=''
document.getElementById('iI').value=''
}

function bUd(){
document.getElementById('crB').style.display='none'
}
 




