import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";


console.log('Initizalizing Firebase database ... ');

initializeApp(firebaseConfig);


const coursesRef = database().ref('courses');
const lessonsRef = database().ref('lessons');



dbData.courses.forEach( course => {

  console.log('adding course', course.url);

  const courseRef = coursesRef.push({
      url: course.url,
      description: course.description,
      iconUrl: course.iconUrl,
      courseListIcon: course.courseListIcon,
      longDescription: course.longDescription
  });

  let lessonKeysPerCourse = [];

  course.lessons.forEach((lesson:any) =>  {

    console.log('adding lesson ', lesson.url);

    lessonKeysPerCourse.push(lessonsRef.push({
        description: lesson.description,
        duration: lesson.duration,
        url: lesson.url,
        tags: lesson.tags,
        videoUrl: lesson.videoUrl || null,
        longDescription: lesson.longDescription,
        courseId: courseRef.key
      }).key);

  });


  const association = database().ref('lessonsPerCourse');

  const lessonsPerCourse = association.child(courseRef.key);

  lessonKeysPerCourse.forEach(lessonKey => {
    console.log('adding lesson to course ');

    const lessonCourseAssociation = lessonsPerCourse.child(lessonKey);

    lessonCourseAssociation.set(true);
  });


});









