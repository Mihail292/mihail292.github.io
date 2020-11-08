const telo=document.getElementsByClassName('telo');
const svitok=telo[0];
const zamech=document.getElementsByClassName('zamech');
const tf= document.getElementById('tf');

vyr(svitok);
vyr(zamech[0]);
zakr();

window.onresize=function(){
vyr(svitok);
vyr(zamech[0]);
}

function vyr(e){
  var rect = e.getBoundingClientRect();
e.style.left=window.innerWidth/2-rect.width/2+'px';
e.style.height=rect.width+'px';
}
function otkr() {
  var rect = zamech[0].getBoundingClientRect();

  tf.autofocus=true;
  svitok.hidden=false;
zamech[0].hidden=true;
svitok.className='pods';vyr(svitok);
}
function zakr() {
  svitok.hidden=true;
zamech[0].hidden=false;vyr(zamech[0]);
}

var firebaseConfig = {
  apiKey: "AIzaSyCB7-zaSIttCWPdhOEOjn83RD79thKULR4",
  authDomain: "houndredone-63426.firebaseapp.com",
  databaseURL: "https://houndredone-63426.firebaseio.com",
  projectId: "houndredone-63426",
  storageBucket: "houndredone-63426.appspot.com",
  messagingSenderId: "955812981428",
  appId: "1:955812981428:web:a748e9d46f3dd88d4cc5e1",
  measurementId: "G-J1G01LTK1Q"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var dataBase = firebase.database().ref('data');

function upd(){

 //var newPostKey = dataBase.child('posts').push().key;

dataBase.child(new Date().getTime()).update({key:tf.value});
tf.value='Здрав будь, боярин!'
};