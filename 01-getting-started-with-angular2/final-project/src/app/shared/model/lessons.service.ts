

import {Injectable, Inject} from "@angular/core";
import {AngularFire, FirebaseRef} from "angularfire2";
import {Lesson} from "./lesson";
import {Observable} from "rxjs/Rx";
import firebaseUpdate from "../firebase/firebaseUpdateToObs";
import {DeleteLessonRequest} from "./delete-lesson-request";


@Injectable()
export class LessonsService {

  dbRef: any;

  constructor(private af:AngularFire,  @Inject(FirebaseRef) dbRef) {
    this.dbRef = dbRef.database().ref();
  }

  findLessonByKey(lessonKey: string): Observable<Lesson> {
    return this.af.database.object(`lessons/${lessonKey}`).map(json => Lesson.fromJson(json)).first();
  }


  findLessonByUrl(url) : Observable<Lesson> {
    return this.af.database.list('lessons', {
      query: {
        orderByChild: 'url',
        equalTo: url
      }
    })
    .map(results => results[0])
    .first();
  }


  findAllLessons(): Observable<Lesson[]> {
    return this.af.database.list('lessons', {
      query: {
        orderByKey: true
      }
    })
    .map(lessons => lessons.map(json => Lesson.fromJson(json)) )
    .first();
  }




  createNewLesson(courseId:string, lesson:any): Observable<any> {

    const lessonToSave = Object.assign({}, lesson, {courseId});

    const newLessonKey = this.dbRef.child('lessons').push().key;

    let dataToSave = {};

    dataToSave["lessons/" + newLessonKey] = lessonToSave;
    dataToSave[`lessonsPerCourse/${courseId}/${newLessonKey}`] = true;

    return firebaseUpdate(this.dbRef, dataToSave);
  }


  saveLesson(lessonId:string, lesson): Observable<any> {

    const lessonToSave = Object.assign({}, lesson);
    delete(lessonToSave.$key);

    let dataToSave = {};
    dataToSave[`lessons/${lessonId}`] = lessonToSave;

    return firebaseUpdate(this.dbRef, dataToSave);
  }



  requestLessonDeletion(lessonId:string, courseId:string) {
     this.dbRef.child('queue/tasks').push(new DeleteLessonRequest(lessonId, courseId))
       .then(
         () => alert('lesson deletion requested !')
       );
  }


}








