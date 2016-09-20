

var firebaseConfig = {
  apiKey: "AIzaSyBhuIkN2d6xNe7DwxzjCRhBIWiu1-mJ9vo",
  authDomain: "final-project-ac645.firebaseapp.com",
  databaseURL: "https://final-project-ac645.firebaseio.com",
  storageBucket: "final-project-ac645.appspot.com"
};




console.log('Initializing Firebase batch server ...');


var firebase = require('firebase');

var app = firebase.initializeApp(firebaseConfig);
var root = app.database();




app.auth().signInWithEmailAndPassword('ca2c-batch@mailinator.com', 'test123')
  .then(runConsumer)
  .catch(onError);


function onError(err) {
  console.error("Could not login", error);
  process.exist();
}


function runConsumer() {

  var Queue = require('firebase-queue');
  var queueRef = root.ref('queue');

  var lessonsRef = root.ref("lessons");
  var lessonsPerCourseRef = root.ref("lessonsPerCourse");


  var queue = new Queue(queueRef, function(data, progress, resolve, reject) {

    console.log('received delete request ...',data);

    const deleteLessonPromise = lessonsRef.child(data.lessonId).remove();

    const deleteLessonPerCourseRef = lessonsPerCourseRef.child(data.courseId + '/' + data.lessonId).remove();

    Promise.all([deleteLessonPromise, deleteLessonPerCourseRef])
      .then(
        function() {
          console.log("lesson deleted");
          resolve();
        }
      ).catch(function() {
      console.log("lesson deletion in error");
      reject();
    });

  });


}

