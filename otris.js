function igroksmelisya(smenigrok) {
  for (u of krugki)(u.style.backgroundColor='red');
  if (gast==0){
    switch (hodit_igrok) {
      case 0: krugki[3].style.backgroundColor='green'; break;
      case 1: krugki[2].style.backgroundColor='green'; break;
      case 2: krugki[1].style.backgroundColor='green'; break;
      case 3: krugki[0].style.backgroundColor='green'; break;
          }
  }
  if (gast==1){
    switch (hodit_igrok) {
      case 0: krugki[0].style.backgroundColor='green'; break;
      case 1: krugki[3].style.backgroundColor='green'; break;
      case 2: krugki[2].style.backgroundColor='green'; break;
      case 3: krugki[1].style.backgroundColor='green'; break;
          }
  }

  if (gast==2){
    switch (hodit_igrok) {
      case 0: krugki[1].style.backgroundColor='green'; break;
      case 1: krugki[0].style.backgroundColor='green'; break;
      case 2: krugki[3].style.backgroundColor='green'; break;
      case 3: krugki[2].style.backgroundColor='green'; break;
          }
  }

  if (gast==3){
    switch (hodit_igrok) {
      case 0: krugki[2].style.backgroundColor='green'; break;
      case 1: krugki[1].style.backgroundColor='green'; break;
      case 2: krugki[0].style.backgroundColor='green'; break;
      case 3: krugki[3].style.backgroundColor='green'; break;
          }
  }
}




var kakoi;
function risuem_karty_igrokov(){


for(krt of kartyIgrokov[0]){dk(krt);}


for(krt of kartyIgrokov[1]){dkv(3);}
if(kolichestvoIgrokov>2)for(krt of kartyIgrokov[2]){dkv(2)};
if(kolichestvoIgrokov>3)for(krt of kartyIgrokov[3]){dkv(1);}

};
function risk(krt,canva){
switch (krt.n) {
  case "шесть пики":ofX=rX*1;ofY=rY*2;risuem(img[1],canva);break;
  case "шесть черви":ofX=rX*2;ofY=rY*2;risuem(img[1],canva);break;
  case "шесть бубны":ofX=rX*0;ofY=rY*0;risuem(img[2],canva);break;
  case "шесть крести":ofX=rX*1;ofY=rY*0;risuem(img[2],canva);break;

  case "семь бубны":ofX=rX*2;ofY=rY*0;risuem(img[2],canva);break;
  case "семь крести":ofX=rX*0;ofY=rY*1;risuem(img[2],canva);break;
  case "семь черви":ofX=rX*1;ofY=rY*1;risuem(img[2],canva);break;
  case "семь пики":ofX=rX*2;ofY=rY*1;risuem(img[2],canva);break;

  case "восемь черви":ofX=rX*0;ofY=rY*2;risuem(img[2],canva);break;
  case "восемь пики":ofX=rX*1;ofY=rY*2;risuem(img[2],canva);break;
  case "восемь бубны":ofX=rX*2;ofY=rY*2+10;risuem(img[2],canva);break;
  case "восемь крести":ofX=rX*0;ofY=rY*0;risuem(img[3],canva);break;

  case "девять бубны":ofX=rX*1;ofY=rY*0;risuem(img[3],canva);break;
  case "девять крести":ofX=rX*2;ofY=rY*0;risuem(img[3],canva);break;
  case "девять черви":ofX=rX*0;ofY=rY*1;risuem(img[3],canva);break;
  case "девять пики":ofX=rX*1;ofY=rY*1;risuem(img[3],canva);break;

  case "десять бубны":ofX=rX*2;ofY=rY*1;risuem(img[3],canva);break;
  case "десять пики":ofX=rX*0-5;ofY=rY*2+10;risuem(img[3],canva);break;
  case "десять черви":ofX=rX*1-5;ofY=rY*2;risuem(img[3],canva);break;
  case "десять крести":ofX=rX*2;ofY=rY*2;risuem(img[3],canva);break

  case "валет пики":ofX=rX*0;ofY=rY*0;risuem(img[4],canva);break;
  case "валет бубны":ofX=rX*1-10;ofY=rY*0;risuem(img[4],canva);break;
  case "валет крести":ofX=rX*2-25;ofY=rY*0;risuem(img[4],canva);break;
  case "валет черви":ofX=rX*0;ofY=rY*1-20;risuem(img[4],canva);break

  case "дама крести":ofX=rX*1-25;ofY=rY*1-25;risuem(img[4],canva);break;
  case "дама черви":ofX=rX*2-25;ofY=rY*1-25;risuem(img[4],canva);break;
  case "дама пики":ofX=rX*0-5;ofY=rY*2-35;risuem(img[4],canva);break;
  case "дама бубны":ofX=rX*1-15;ofY=rY*2-35;risuem(img[4],canva);break

  case "король крести":ofX=rX*2-25;ofY=rY*2-35;risuem(img[4],canva);break;
  case "король черви":ofX=rX*0;ofY=rY*0;risuem(img[5],canva);break;
  case "король черви":ofX=rX*1;ofY=rY*0;risuem(img[5],canva);break;
  case "король пики":ofX=rX*2;ofY=rY*0;risuem(img[5],canva);break
  case "король бубны":ofX=rX*0;ofY=rY*1;risuem(img[5],canva);break;

  case "туз крести":ofX=rX*1;ofY=rY*1;risuem(img[5],canva);break;
  case "туз черви":ofX=rX*2;ofY=rY*1;risuem(img[5],canva);break;
  case "туз пики":ofX=rX*0;ofY=rY*2;risuem(img[5],canva);break
  case "туз бубны":ofX=rX*1;ofY=rY*2+10;risuem(img[5],canva);break

  };
};
function risuem (imaga,canva){
//if(canva==0){var shirina=220/2; var visota=300/2;}
//if(canva!=0){var shirina=50; var visota=100;}
ctxk.drawImage(imaga, ofX, ofY, rX, rY,0, 0,canvas.width,canvas.height);
var imk=new Image(110,200);imk.crossOrigin = "anonymous";
imk.src=canvas.toDataURL();ctxk.clearRect(0, 0, canvas.width, canvas.height);
canva.style.backgroundImage = 'url('+imk.src+')';
canva.style.backgroundSize='100%';
canva.style.border='8px solid white';
};
var rubaha;
function rubashka() {
	ctxk.drawImage(img[6], 337, 8, 337, 523,0, 0,canvas.width,canvas.height);
	var imk=new Image(220/2,300/2);
	imk.src=canvas.toDataURL();imk.crossOrigin = "anonymous";

	ctxk.clearRect(0, 0, canvas.width, canvas.height);
	imk.style.position='fixed';
  rubaha=imk;
	//coloda[0].append(imk);
	colod[0].style.backgroundImage = 'url('+imk.src+')';
	colod[0].style.backgroundSize='100%';
	colod[1].style.backgroundImage = 'url('+imk.src+')';
	colod[1].style.backgroundSize='100%';
	colod[0].style.boxShadow='2px 18px 2px 2px rgba(20,0,150,0.5)';
	colod[1].style.boxShadow='2px 0.5px 2px 0.05px rgba(20,0,150,0.5)'

itc=0;
//interval=setInterval(()=>{dkv(1);dkv(2);dkv(3);itc++;if(itc>=36)clearInterval(interval)},50);


};

function ubrizcol() {
	colod[0].style.boxShadow='2px '+cards.length/2+'px 2px '+cards.length/20+'px rgba(20,0,150,0.5)';
}
function ubrizcon() {
	colod[1].style.boxShadow='2px '+coloda.length/2+'px 2px '+coloda.length/20+'px rgba(20,0,150,0.5)';
}
function nmess(){document.body.appendChild(document.createElement('div')).className='mess';
document.body.children[8].addEventListener('click',()=>{document.body.children[8].remove()})}
function mess(m){document.body.children[8].textContent+=m};
