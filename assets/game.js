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


});