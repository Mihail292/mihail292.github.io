var vse;var nevse=1;
function drugie() {
//rB.child(igr.n).on(function(snap) {snap.val();});

//for (let i=0; i<kolichestvoIgrokov; i++){dataBase.child('room'+gid).child(kartyIgrokov[i].n).once('value',(snap)=>{kartyIgrokov[i]=snap.val()})}
//dataBase.child('room'+player.id).child('ki').
dataBase.child('room'+gid).once('value',(snap)=>{vse=snap.val();
kartyIgrokov=JSON.parse(vse.ki);

//for (i=0; i<kolichestvoIgrokov; i++){kartyIgrokov.push(vse[i])};
//
if(gast==1){
  for(krt of kartyIgrokov[1]){dk(krt)};
  for(krt of kartyIgrokov[2]){dkv(3);}
  for(krt of kartyIgrokov[3]){dkv(2);}
  for(krt of kartyIgrokov[0]){dkv(1);}
}
if(gast==2){
  for(krt of kartyIgrokov[2]){dk(krt)};
  for(krt of kartyIgrokov[3]){dkv(3);}
  for(krt of kartyIgrokov[0]){dkv(2);}
  for(krt of kartyIgrokov[1]){dkv(1);}
}
if(gast==3){
  for(krt of kartyIgrokov[3]){dk(krt)};
  for(krt of kartyIgrokov[0]){dkv(3);}
  for(krt of kartyIgrokov[1]){dkv(2);}
  for(krt of kartyIgrokov[2]){dkv(1);}
}
risk(kon,colod[1]);

})}

function razd(){

		for (i=0; i<kolichestvoIgrokov; i++){
		kartyIgrokov.push([]);//kartyIgrokov[i].n='Игрок номер ' + (i+1);



		for (y=0; y<po_skolko_kart; y++){
		kartyIgrokov[i].push(cards.shift());

  }};
	  kon=kartyIgrokov[hodit_igrok].shift();
		coloda.push(kon);
		nuznMast=kon.m;
dataBase.child('room'+gid).update({nuznMast});
 //dataBase.child('room'+player.id).set(kartyIgrokov);
 dataBase.child('room'+player.id).child('ki').set(JSON.stringify(kartyIgrokov));
dataBase.child('room'+player.id).update({kon});
//dataBase.child('room'+player.id).update({hodit_igrok});

nmess();
mess('Карты розданы. ');
mess('Случайная карта игрока, ходящего первым кладётся на кон. ' );
mess('На кону: '+kon.n+'. ');
// document.body.children[8].style.width='400px';
// document.body.children[8].style.top='220px'
// document.body.children[8].style.backgroundColor='yellow';
// document.body.children[8].style.textAlign='center'
// document.body.children[8].style.fontSize='20px'
if(kon.d=='девять'){mess('Кройте девятку, пока не закроете ');return;}
if(kon.d=='дама'){mess('Заказывайте масть ');return;}



 smena_igroka();mess('Ход переходит к следующему игроку ');
  };

  function hodushty() {
    igroksmelisya();nmess();

     if(kon.n=='король пики'){mess('игрок берет четыре карты из колоды и пропускает ход. ');
         let i = 0;while (i < 4){BeretKarty(); i++;}smena_igroka();return};

      switch (kon.d) {
     case "шесть":mess('Берешь одну карту из колоды и пропускаешь ход. '); BeretKarty();smena_igroka();return;
     case "семь":mess(' игрок берет две карты из колоды и пропускает ход. ');let i = 0;while (i < 2){BeretKarty(); i++;};smena_igroka();return;
     case "туз":mess(' игрок пропускает ход. ');smena_igroka();return;

     };
mess('делай ход');
delayhod=true;
};

function BeretKarty(){
console.log('bk');
//   rk(cards[0],hodit_igrok+1);kartyIgrokov[hodit_igrok].push(cards.shift());
//   if(!cards.length){peretus(coloda); for(var k of coloda){cards.push(k)};coloda=[];
//
bereshkartu=true;
// }
};
function vverhposhlo(etakarta){if (delayhod){console.log('эта карта '+kartyIgrokov[hodit_igrok][etakarta].n);
if (kartyIgrokov[hodit_igrok][etakarta].d=='дама'){sovpadNaRukah.push(kartyIgrokov[hodit_igrok][i])}else{
if (kartyIgrokov[hodit_igrok][etakarta].m==nuznMast){sovpadNaRukah.push(kartyIgrokov[hodit_igrok][i])};
if (kartyIgrokov[hodit_igrok][etakarta].d==kon.d ){sovpadNaRukah.push(kartyIgrokov[hodit_igrok][i])}
}}};


function vnizhposhlo(){};



  function smena_igroka(){

hodit_igrok++; if (hodit_igrok>kolichestvoIgrokov-1){hodit_igrok=0};
dataBase.child('room'+gid).child('hi').update({hodit_igrok});

  };



function peretus(arr){
		var j, temp;
		for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;}
		return arr;
}
function ct(){cards=[];
for (i=0; i<36; i++){cards.push({})};
for (i=0; i<9; i++){cards[i].m='пики'};
for (i=9; i<9*2; i++){cards[i].m='крести'};
for (i=9*2; i<9*3; i++){cards[i].m='черви'};
for (i=9*3; i<9*4; i++){cards[i].m='бубны'};
for (i=0; i<36; i++){y=0;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='шесть';cards[i].ochki=6;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='семь';cards[i].ochki=7;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='восемь';cards[i].ochki=8;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='девять';cards[i].ochki=0;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='десять';cards[i].ochki=10;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='валет';cards[i].ochki=2;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='дама';cards[i].ochki=3;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='король';cards[i].ochki=4;};y++;
if (i==0+y || i==9+y || i==18+y || i==27+y){cards[i].d='туз';cards[i].ochki=11;};y=0;}
for (i=0; i<36; i++){cards[i].n=(cards[i].d+' '+cards[i].m);
cards[i].ves=0;cards[i].sw=0;
vsekarty=[]=cards.slice()};
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
}
};
