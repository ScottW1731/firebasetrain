$( document ).ready(function() {


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAaMaP7NiyLupDich-gzA-LWQF08HUlde0",
    authDomain: "trainactivitybasic-7d39e.firebaseapp.com",
    databaseURL: "https://trainactivitybasic-7d39e.firebaseio.com",
    projectId: "trainactivitybasic-7d39e",
    storageBucket: "trainactivitybasic-7d39e.appspot.com",
    messagingSenderId: "177525492048"
  };
  firebase.initializeApp(config);


  var dataRef = firebase.database();


  // Initial Values
  var trainname = "";
  var destination = "";
  var arrivaltime = 0;
  var frequency = "";

      // something I found on fire base youtube channel that I hope will help me
      // write to my database channel
    var bigone = document.getElementById('bigone');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => bigone.innerText = snap.val());
    // I could not figure out how to write to my database
    // Do I have to put it in manually?
    
});