

var firebaseConfig = {
  apiKey: "AIzaSyBhuIkN2d6xNe7DwxzjCRhBIWiu1-mJ9vo",
  authDomain: "final-project-ac645.firebaseapp.com",
  databaseURL: "https://final-project-ac645.firebaseio.com",
  storageBucket: "final-project-ac645.appspot.com"
};


console.log('Initializing FIREStack server ...');


var firebase = require('firebase');

var app = firebase.initializeApp(firebaseConfig);
var root = app.database();


var Queue = require('firebase-queue');
var queueRef = root.ref('queue');

var lessonsRef = root.ref("lessons");
var lessonsPerCourseRef = root.ref("lessonsPerCourse");



var queue = new Queue(queueRef, function(data, progress, resolve, reject) {

  console.log('received delete request ...',data);

  const deleteLessonPromise = lessonsRef.child(data.lessonId).remove();

  console.log('removed lesson ref');

  const deleteLessonPerCourseRef = lessonsPerCourseRef.child(data.courseId + '/' + data.lessonId).remove();


  Promise.all([deleteLessonPromise, deleteLessonPerCourseRef])
    .then(
      function() {
        console.log("lesson deleted");
        resolve();
      }
    ).catch(function() {
    console.log("lesson in error");
      reject();
  });



});
