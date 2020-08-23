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

var gast;var room;
var gasts;var rooms;

var dataBase = firebase.database().ref('data');
var gastsBase = firebase.database().ref('data/gasts');
var roomsBase = firebase.database().ref('data/rooms');

// var connectedRef = firebase.database().ref(".info/connected");
// connectedRef.on("value", function(snap) {
//   if (snap.val() === true) {
//     alert("connected");
//   } else {
//     alert("not connected");
//   }
// });
//gastsBase.on('value',(ch)=>{console.log(ch.val());})
//


//
//dataBase.onDisconnect().update({gasts:gasts-1});

//gastsBase.transaction(function(currentRank) {return currentRank + 1;});
//dataBase.update({gasts:1, rooms:1});
//var gastsDis = gastsBase.onDisconnect();
// window.onunload = function (){
//gastsDis.transaction(function(currentRank) {currentRank - 1;});
// var fbRef= new Firebase('https://houndredone-63426.firebaseio.com/data');
// var Pid;var pl;
// var komnata;
// var room;
// var gost;
// var data;

// fbRef.once("child_added", function(d) {
// data=d.val(); gost=data.gasts;
// console.log(gost);
// gost++;fbRef.update({gasts:gost});
// console.log(gost);
// fbRef.child('playear').on('child_added', function (pD){if (pD.val()){
// if (pD.key()!=Pid){fbRef.child('playear').child(pD.key()).on('value', vvv);}}});
// function vvv(pd){console.log(pd.val(), pd.key());};



// //Pid=fbRef.child('player').push().key();
// fbRef.once("value", function(d) {
//   var data=d.val();
//   gost=data.gasts;gost++;fbRef.update({gasts:gost});
//   if(gost==1){komnata=1};
//   if(gost==1){fbRef.update({rooms:komnata});room=fbRef.child('Комната'+komnata);//newH();
//
//
//   window.onunload = function (){
//         //d.val()--;
//         // fbRef.child('Комната'+komnata).remove();
//         // gost=data.gasts;komnata=data.rooms;
//         gost--;komnata--;fbRef.update({gasts:gost,rooms:komnata});
//
//     }};
  //}else{window.onunload = function (){gost=d.val().gost;gost--;
    //fbRef.update({gasts:gost})};drugie();};
  //data.rooms






// fbRef.child('playear').child(Pid).child('orientation').set({position: {x:0}});
//
// fbRef.child('playear').on('child_added', function (pD){if (pD.val()){
// if (pD.key()!=Pid){fbRef.child('playear').child(pD.key()).on('value', vvv);}}});
// function vvv(pd){console.log(pd.val(), pd.key());};
