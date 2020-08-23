
var canvas = document.createElement("CANVAS");var wh=5;var rX=340;var rY=525;var ofX=ofY=0;
canvas.width=1028/wh;canvas.height=1586/wh;var ctxk = canvas.getContext('2d');



var kartyIgrokov=[];var kon;var nk=0;var cards=[];var coloda=[];var sovpadNaRukah=[];var img=[];var loadImg=0;var nuznMast;
var K={};snbd=[];snb=[];
var kolichestvoIgrokov=4,po_skolko_kart=5;index_karty=0;hodit_igrok=0;ochkiigrokow=[];var nH=false;
for (var i=1; i<7; i++){img[i] = document.createElement("IMG");img[i].src = `./карты/${i}.jpg`;
img[i].onload=function(){loadImg++;if(loadImg==6){rk(kon,0);rubashka();risuem_karty_igrokov()}}};
for (var i=0; i<kolichestvoIgrokov;i++){ochkiigrokow.push(0)};
function rnd(a,b) {return a+Math.floor(Math.random()*(b-a+1))};
function newH(){kartyIgrokov=[];cards=[];coloda=[];sovpadNaRukah=[];
for(i=0;i<6;i++)document.getElementById(`div${i}`).innerHTML = "";
ct();peretus(cards);razd();risuem_karty_igrokov();rubashka();rk(kon,0);nH=false;
};
function podschet_ochkov(){nH=true;
for (var i=0; i<kolichestvoIgrokov;i++){for (let ki of kartyIgrokov[i]){ochkiigrokow[i]+=ki.ochki}};
for (var i=0; i<kolichestvoIgrokov;i++){
if (ochkiigrokow[i]==101){ochkiigrokow[i]=0;csl(kartyIgrokov[i].n + ' набрал 101 его очки обнулились')};
if (ochkiigrokow[i]>101){csl(kartyIgrokov[i].n + ' ПРОИГРАЛ GAME OVER');return};}
csl('game go on');}
function csl(text,color){
var my_div = newDiv = null;
var newDiv = document.createElement("div");
newDiv.innerHTML = text;newDiv.style.color=color;
//document.getElementById('d').innerHTML = "";
		my_div = document.getElementById('d');
		my_div.prepend(newDiv);
    //document.body.insertBefore(newDiv, my_div);
	//window.scrollBy(0, window.innerHeight);
};
function risuem_karty_igrokov(){
//var node=`div${hodit_igrok+1}`;
//document.removeChild(node);document.getElementById(`div${hodit_igrok+1}`)
var pokuda=1;
while(pokuda<kolichestvoIgrokov+1){document.getElementById(`div${pokuda}`).innerHTML='';
for (i=0; i<kartyIgrokov[pokuda-1].length; i++){
//`карты/${i}.jpg`
rk(kartyIgrokov[pokuda-1][i],pokuda);


//rk(igrok[0],ctx1);

//csl(igrok.length)
};
pokuda++;
}



};
function risuem (imaga,canva){
if(canva==0){var shirina=220/2; var visota=300/2;}
if(canva!=0){var shirina=50; var visota=100;}
ctxk.drawImage(imaga, ofX, ofY, rX, rY,0, 0,canvas.width,canvas.height);
var imk=new Image(shirina,visota);imk.crossOrigin = "anonymous";
if(canva==0){document.getElementById(`div0`).innerHTML='';}
imk.src=canvas.toDataURL();ctxk.clearRect(0, 0, canvas.width, canvas.height);
if(canva==5){imk.style.position='fixed';
imk.style.top='25px';imk.style.left='140px'} //110 150
document.getElementById(`div${canva}`).append(imk);
imk.onclick= function(){vrashat(imk)}};
function vrashat(i){

i.style.transform=`rotate(5deg)`;
csl(i.parentNode.id);
}
function rubashka(){ctxk.drawImage(img[6], 337, 0, 337, 531,0, 0,canvas.width,canvas.height);


var imk=new Image(220/2,300/2);imk.crossOrigin = "anonymous"
imk.src=canvas.toDataURL();ctxk.clearRect(0, 0, canvas.width, canvas.height);
imk.style.position='fixed';
document.getElementById(`div5`).append(imk)};
function rk(karta,canva){
switch (karta.n) {
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
  case "восемь бубны":ofX=rX*2;ofY=rY*2;risuem(img[2],canva);break;
  case "восемь крести":ofX=rX*0;ofY=rY*0;risuem(img[3],canva);break;
  
  case "девять бубны":ofX=rX*1;ofY=rY*0;risuem(img[3],canva);break;
  case "девять крести":ofX=rX*2;ofY=rY*0;risuem(img[3],canva);break;
  case "девять черви":ofX=rX*0;ofY=rY*1;risuem(img[3],canva);break;
  case "девять пики":ofX=rX*1;ofY=rY*1;risuem(img[3],canva);break;
  
  case "десять бубны":ofX=rX*2;ofY=rY*1;risuem(img[3],canva);break;
  case "десять пики":ofX=rX*0;ofY=rY*2;risuem(img[3],canva);break;
  case "десять черви":ofX=rX*1;ofY=rY*2;risuem(img[3],canva);break;
  case "десять крести":ofX=rX*2;ofY=rY*2;risuem(img[3],canva);break
  
  case "валет пики":ofX=rX*0;ofY=rY*0;risuem(img[4],canva);break;
  case "валет бубны":ofX=rX*1;ofY=rY*0;risuem(img[4],canva);break;
  case "валет крести":ofX=rX*2;ofY=rY*0;risuem(img[4],canva);break;
  case "валет черви":ofX=rX*0;ofY=rY*1;risuem(img[4],canva);break
  
  case "дама крести":ofX=rX*1;ofY=rY*1;risuem(img[4],canva);break;
  case "дама черви":ofX=rX*2;ofY=rY*1;risuem(img[4],canva);break;
  case "дама пики":ofX=rX*0;ofY=rY*2;risuem(img[4],canva);break;
  case "дама бубны":ofX=rX*1;ofY=rY*2;risuem(img[4],canva);break
  
  case "король крести":ofX=rX*2;ofY=rY*2;risuem(img[4],canva);break;
  case "король черви":ofX=rX*0;ofY=rY*0;risuem(img[5],canva);break;
  case "король черви":ofX=rX*1;ofY=rY*0;risuem(img[5],canva);break;
  case "король пики":ofX=rX*2;ofY=rY*0;risuem(img[5],canva);break
  case "король бубны":ofX=rX*0;ofY=rY*1;risuem(img[5],canva);break;
  
  case "туз крести":ofX=rX*1;ofY=rY*1;risuem(img[5],canva);break;
  case "туз черви":ofX=rX*2;ofY=rY*1;risuem(img[5],canva);break;
  case "туз пики":ofX=rX*0;ofY=rY*2;risuem(img[5],canva);break
  case "туз бубны":ofX=rX*1;ofY=rY*2;risuem(img[5],canva);break
   
  };
};
function ct(){

for (i=0; i<36; i++){cards.push({})};
for (i=0; i<9; i++){cards[i].m='пики'};
for (i=9; i<9*2; i++){cards[i].m='крести'};
for (i=9*2; i<9*3; i++){cards[i].m='черви'};
for (i=9*3; i<9*4; i++){cards[i].m='бубны'};
for (i=0; i<36; i++){
y=0;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='шесть';cards[i].ochki=6;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='семь';cards[i].ochki=7;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='восемь';cards[i].ochki=8;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='девять';cards[i].ochki=0;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='десять';cards[i].ochki=10;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='валет';cards[i].ochki=2;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='дама';cards[i].ochki=3;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='король';cards[i].ochki=4;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='туз';cards[i].ochki=11;};y=0;

					}
for (i=0; i<36; i++){cards[i].n=(cards[i].d+' '+cards[i].m);
cards[i].ves=0;cards[i].sw=0;
vsekarty=[]=cards.slice();
};
cards.find(i=>i.n=='король пики').ochki=12;
for (s of cards){
switch (s.d) {
  case 'девять':s.ves=9;break;
  case 'семь':s.ves=7;break;
  case 'шесть':s.ves=6;break;
  case 'туз':s.ves=5;break;
  case 'десять':s.ves=4;break;
  case 'восемь':s.ves=3;break;
  case 'король':s.ves=2;break;
  case 'валет':s.ves=1;break;
  case 'дама':s.ves=-5;break;
 }
 if (s.n=='король пики')s.ves=8;
 if (s.n=='дама пики')s.ves=-8;
 };



}

function peretus(arr){
		var j, temp;
		for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;}
		return arr;
}
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
};
function BeretKarty(){rk(cards[0],hodit_igrok+1);kartyIgrokov[hodit_igrok].push(cards.shift());
if(!cards.length){peretus(coloda); for(var k of coloda){cards.push(k)};coloda=[];}};
function dob_k(name,igrok,ist){
if (ist.find(i=>i.n==name)){
kartyIgrokov[igrok].push(ist.splice(ist.indexOf(ist.find(i=>i.n==name)),1)[0]);
rk(kartyIgrokov[igrok][kartyIgrokov[igrok].length-1],igrok+1)}};
function p_k(js,igrok){
//js.splice(0,1,"'");js.splice(js.length-1,1,"'");
mkkj=JSON.parse(js);
document.getElementById(`div${igrok+1}`).innerHTML='';
for (mj of mkkj){rk(mj,igrok+1)};
kartyIgrokov[igrok]=mkkj;}
function d_k(name,igrok){
kartyIgrokov[igrok].push(vsekarty.find(i=>i.n==name));
rk(kartyIgrokov[igrok][kartyIgrokov[igrok].length-1],igrok+1)};
function obr_hod(igrok){kartyIgrokov[igrok].push(coloda.pop());
rk(kartyIgrokov[igrok][kartyIgrokov[igrok].length-1],igrok+1);rk(coloda[coloda.length-1],0);kon=coloda[coloda.length-1];nuznMast=kon.m;hodit_igrok=igrok;};
function razd(){
		for (i=0; i<kolichestvoIgrokov; i++){
		kartyIgrokov.push([]);kartyIgrokov[i].n='Игрок номер ' + (i+1);
		for (y=0; y<po_skolko_kart; y++){
		kartyIgrokov[i].push(cards.shift());
		kartyIgrokov[i][y].i=index_karty;index_karty++;
		if (index_karty==po_skolko_kart){index_karty=0}}};
		//незнаю нужен ли будет индеск ну оставлю покачто
		//kon=cards[nk];nk++;
		kon=kartyIgrokov[hodit_igrok].shift();//rk(kon,ctx);
		coloda.push(kon);
		nuznMast=kon.m;
		if(kon.n=='король пики'){smena_igroka();let i = 0;while (i < 4){BeretKarty(); i++;}smena_igroka();return};
		switch (kon.d) {
  case "шесть":smena_igroka(); BeretKarty();break;
  case "семь":smena_igroka();let i = 0;while (i < 2){BeretKarty(); i++;};break;
  case "туз":smena_igroka();break;
  case "дама":zakaz_masty();break;
  case "девять":return;
  };
smena_igroka();
		
		//smena_igroka();
		//csl("в колоди осталося "+cards.length + " карт","green")
		//csl("накону " + kon.n);
};
function proverka_sovpadeniy(){

sovpadNaRukah=[];

for (i=0; i<kartyIgrokov[hodit_igrok].length; i++){
if (kartyIgrokov[hodit_igrok][i].d=='дама'){sovpadNaRukah.push(kartyIgrokov[hodit_igrok][i])}else{
if (kartyIgrokov[hodit_igrok][i].m==nuznMast){sovpadNaRukah.push(kartyIgrokov[hodit_igrok][i])};
if (kartyIgrokov[hodit_igrok][i].d==kon.d ){sovpadNaRukah.push(kartyIgrokov[hodit_igrok][i])}
}}};

function kartu_izyat(indexsbroshenoi,h){
var skartinki=document.getElementById(`div${h+1}`);
skartinki.removeChild(skartinki.children[indexsbroshenoi]);
kartyIgrokov[h].splice(indexsbroshenoi,1);};
function kartu_naKon(){obnulenie_parametrov();kon=sovpadNaRukah[0];nuznMast=kon.m;rk(kon,0);
var indexsbroshenoi=kartyIgrokov[hodit_igrok].indexOf(kon);kartu_izyat(indexsbroshenoi,hodit_igrok);

if (!kartyIgrokov[hodit_igrok].length && kon.d!='девять'){csl('   ИГРА ОКОНЧЕНА!!!!!!','red');
switch (kon.d) {
  case "шесть":smena_igroka(); BeretKarty();hodit_igrok=pred_igrok();break;
  case "семь":smena_igroka();let i = 0;while (i < 2){BeretKarty(); i++;};hodit_igrok=pred_igrok();break;
  };if(kon.n=='король пики'){smena_igroka();let i = 0;while (i < 4){BeretKarty(); i++;};hodit_igrok=pred_igrok();};podschet_ochkov();return};
coloda.push(kon);
switch (kon.d) {
  case "шесть":smena_igroka(); BeretKarty();break;
  case "семь":smena_igroka();let i = 0;while (i < 2){BeretKarty(); i++;};break;
  case "туз":smena_igroka();break;
  case "дама":zakaz_masty();break;
  case "девять":return;
  };

if(kon.n=='король пики'){smena_igroka();let i = 0;while (i < 4){BeretKarty(); i++;}};
smena_igroka();};

function zakaz_masty(){

pi=[];ch=[];kr=[];bu=[];
for(let mast of kartyIgrokov[hodit_igrok]){
switch (mast.m){
case "пики":pi.push(mast); break;
case "крести":kr.push(mast);break;
case "бубны":bu.push(mast);break;
case "черви":ch.push(mast);break;}};
mast=[];mast.push(pi,ch,kr,bu);mast.sort((b,a)=>a.length-b.length);nuznMast=mast[0][0].m;
arl=mast.filter(i=>(i.length==mast[0].length)&&(i!=mast[0]))
if(arl.length){arl.push(mast[0]);asq=[];for(a of arl){asq.push(a.reduce((t,i)=>t+i.ves,0))}
nuznMast=arl[asq.indexOf(Math.max(...asq))][0].m};

//bv=[...kartyIgrokov[hodit_igrok]].sort((b,a)=>a.ves-b.ves)[0].ves;
if (kartyIgrokov[hodit_igrok].length==2 && (r=kartyIgrokov[hodit_igrok].find(i=>i.m!='пики'))){nuznMast=r.m;}

//if (kartyIgrokov[hodit_igrok].length==2){nuznMast=kartyIgrokov[hodit_igrok].find(i=>i).m}

if (kartyIgrokov[hodit_igrok].length==1 && kartyIgrokov[hodit_igrok][0].n=='дама пики'){nuznMast=kon.m}
zamenennayadama={};zamenennayadama.n='дама ' +nuznMast;rk(zamenennayadama,0)};

function smena_igroka(){

if(hodit_igrok==kolichestvoIgrokov-1){document.getElementById(`div${hodit_igrok+1}`).style.background="";}
//document.getElementById(`div${hodit_igrok+1}`).style.border="3px solid green";

hodit_igrok++; if (hodit_igrok>kolichestvoIgrokov-1){hodit_igrok=0}

document.getElementById(`div${hodit_igrok+1}`).style.background="green";
document.getElementById(`div${hodit_igrok}`).style.background="";
};
function sled_igrok(){var si=hodit_igrok+1;if (si>kolichestvoIgrokov-1){si=0};return si;};
function pred_igrok(){var pi=hodit_igrok-1;if (pi<0){pi=kolichestvoIgrokov-1};return pi;};
function obnulenie_parametrov(){

			
			};

function hod(){sovpadNaRukah=[];proverka_sovpadeniy();rubashka();nH==false;
log('~~~~~~~~~~~');



if (sovpadNaRukah.length==0){BeretKarty();
rk(kartyIgrokov[hodit_igrok][kartyIgrokov[hodit_igrok].length-1],5);proverka_sovpadeniy();
if (sovpadNaRukah.length==0){if(kon.d!="девять")smena_igroka();return;}};

if (sovpadNaRukah.length==1){kartu_naKon();return;};

//только дамы
if (!sovpadNaRukah.filter(i=>i.d!='дама').length){if (ndp=sovpadNaRukah.find(i=>i.n!='дама пики')){sovpadNaRukah[0]=ndp}else{sovpadNaRukah[0]=sovpadNaRukah.find(i=>i.n=='дама пики')}kartu_naKon();return;};

// одна не дама
if (sovpadNaRukah.filter(i=>i.d!='дама').length==1){sovpadNaRukah[0]=sovpadNaRukah.find(i=>i.d!='дама');kartu_naKon();return;};

if (sovpadNaRukah.length>1){postroyka_variaciy();}
};

function postroyka_variaciy(){
var i=0; nnn=[];nnn.push([]);mmm=[];K={};//proverka_sovpadeniy();
var sO=sovpadNaRukah;sO.sort((b,a)=>a.ves-b.ves);sO=sO[0].ves;
var karty_igroka=[];for (var k of kartyIgrokov[hodit_igrok]){if (k.d!='дама')karty_igroka.push(k)};
for (k of kartyIgrokov[hodit_igrok]){if(k.d=="шесть"||k.d=="семь"||k.d=="девять"||k.d=="туз"||k.n=="король пики"){k.pr=true;}
else{k.pr=false}};

for (var c of karty_igroka){for (var cc of karty_igroka){
if (cc!=c && ( cc.d==c.d || cc.m==c.m )){nnn[0].push([]); nnn[0][i].push(c,cc);i++;}}}mmm=nnn.slice();

if(nnn[0].length){
ioio=[];for (iii of nnn[0]){log('вошёл в иом ' + nnn[0].length);if(!iii.find(i=>i.pr==false))ioio.push(iii);}nnn[0]=ioio;
labN: for (var z=1;;z++){nnn[z]=[];for (j of nnn[z-1]){
for (m of nnn[0]){if(j[j.length-1]==m[0]&&j.indexOf(m[1])==-1){
nnn[z].push([]);nnn[z][nnn[z].length-1]=nnn[z][nnn[z].length-1].concat(j.slice(0,j.length-1),m)}}}
if (!nnn[z].length) break labN;}
nnn[nnn.length-1]=nnn[nnn.length-2].filter(u=>sovpadNaRukah.indexOf(u[0])!=-1);
if(nnn[nnn.length-1].length>1){sbv=[];for(n of nnn[nnn.length-1]){sbv.push(n[0])};sbv.sort((b,a)=>a.ves-b.ves);
K=sbv[0];sovpadNaRukah[0]=K;log(K.n+' cbv[0]');kartu_naKon();return;}
else{if (nnn[nnn.length-1].length){K=nnn[nnn.length-1][0][0];sovpadNaRukah[0]=K;log(K.n+' nnn[0]');kartu_naKon();return;}};};

if(mmm[0].length){
labM: for (var z=1;;z++){mmm[z]=[];for (j of mmm[z-1]){
for (m of mmm[0]){if(j[j.length-1]==m[0]&&j.indexOf(m[1])==-1){
mmm[z].push([]);mmm[z][mmm[z].length-1]=mmm[z][mmm[z].length-1].concat(j.slice(0,j.length-1),m)}}}
if (!mmm[z].length) break labM;}

M: for (i=2;;){if (mmm[mmm.length-i].filter(u=>sovpadNaRukah.indexOf(u[0])!=-1).length){
mmm[mmm.length-1]=mmm[mmm.length-i].filter(u=>sovpadNaRukah.indexOf(u[0])!=-1);break M}
else{if(mmm[mmm.length-i]==mmm[0]){break M}else{i++}}}

if(mmm[mmm.length-1].length){sbv=[];for(m of mmm[mmm.length-1]){sbv.push(m[0])};sbv.sort((b,a)=>a.ves-b.ves);

if(sbv.filter(i=>(i.ves==sbv[0].ves)&&(i!=sbv[0])).length){
sbx=mmm[0].filter(p=>sovpadNaRukah.indexOf(p[0])!=-1);sbx.sort((b,a)=>a[1].ves-b[1].ves);
if(sbx[0][0].ves>=sbv[0]){sovpadNaRukah[0]=sbx[0][0];log(sbx[0][0].n+' sbx[0][0]');kartu_naKon();return;}};
if(kolichestvoIgrokov==2){K=sbv[0];sovpadNaRukah[0]=K;log(K.n+' первая карта самой длинной цепи');kartu_naKon();return;}}};

sovpadNaRukah.sort((b,a)=>a.ves-b.ves);log(' sovpadNaRukah[0]');kartu_naKon();return;

 log('не вышло');

}

function log(x){console.log(x);};
						
ct();peretus(cards);razd();