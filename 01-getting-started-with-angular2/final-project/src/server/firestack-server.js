

var firebaseConfig = {
  apiKey: "AIzaSyBhuIkN2d6xNe7DwxzjCRhBIWiu1-mJ9vo",
  authDomain: "final-project-ac645.firebaseapp.com",
  databaseURL: "https://final-project-ac645.firebaseio.com",
  storageBucket: "final-project-ac645.appspot.com"
};

/*

var authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

*/

console.log('Initializing FIREStack server ...');




var firebase = require('firebase');

var app = firebase.initializeApp(firebaseConfig);
var root = app.database();


var Queue = require('firebase-queue');
var queueRef = root.ref('queue');


var queue = new Queue(queueRef, function(data, progress, resolve, reject) {

  // Read and process task data
  console.log(data);

  // Update the progress state of the task
  setTimeout(function() {
    console.log('50%');
    progress(50);
  }, 500);

  // Finish the job asynchronously
  setTimeout(function() {
    console.log('100%');
    resolve();
  }, 1000);
});
