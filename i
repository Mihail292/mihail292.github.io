<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Текстовое поле</title>
  <style>
  	#359{
  		background: #f0f0f0;
  	}
  </style>
  <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js"></script>

  <script src="https://www.gstatic.com/firebasejs/7.18.0/firebase-storage.js"></script>
 
 </head>
 <body>
 <div id=359 name="div" style="background-image: url(./kka.jpg)">
 <form>
<textarea name="textField" cols="35" rows="7"></textarea>
<p><input name="otprm" type=button onClick="getData()"></p>
</form>
 <input name="file" type=file onChange='chang()'/>
</div>
 <script language="JavaScript">

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
var dp=firebase.initializeApp(firebaseConfig);

var storageRef = firebase.storage().ref();
var f,t;

const div=document.getElementsByName('div');
//div[0].style.backgroundSize='50px';
div[0].style.width='240px';
div[0].style.left='50%';
div[0].style.reight='50%';

const ert=document.getElementsByName('textField');
ert[0].style.width='240px';
ert[0].style.height='240px';
ert[0].style.position='relative';

ert[0].style.left='1%';
ert[0].style.fontSize='24px';
ert[0].style.backgroundColor='yellow';

const qwe=document.getElementsByName('otprm');
qwe[0].style.position='relative';

qwe[0].style.left='25%';
qwe[0].style.borderRadius='50%';

qwe[0].style.width='120px';
qwe[0].style.height='120px';
//qwe[0].style.backgroundImage='url(./akk.jpg)';
qwe[0].style.backgroundColor='green';
qwe[0].style.backgroundPositionY="50%";
qwe[0].style.backgroundSize='100%';
qwe[0].style.boxShadow="2px 10px 2px 2px rgba(0,0,0,1)";
//qwe[0].style.fontSize='24px';

function chang(){f=document.getElementsByName('file')[0].files[0];
ut=storageRef.child(`im/${f.name}`).put(f);
}

function getData() {
t=document.forms[0].textField.value;
storageRef.child(`im/${t.slice(0,24)}.txt`).putString(t);
document.forms[0].textField.value='';

};


</script>



 </body>
</html>
