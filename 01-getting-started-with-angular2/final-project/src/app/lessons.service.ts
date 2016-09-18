

import {Injectable, Inject} from "@angular/core";
import {AngularFire, FirebaseRef} from "angularfire2";
import {Lesson} from "./shared/model/lesson";
import {Observable, Subject} from "rxjs/Rx";
import firebaseUpdateObs from "./shared/firebase/firebaseUpdateToObs";





@Injectable()
export class LessonsService {

  dbRef: any;

  constructor(private af:AngularFire,  @Inject(FirebaseRef) dbRef) {
    this.dbRef = dbRef.database().ref();
  }

  findLessonByKey(lessonKey: string): Observable<Lesson> {
    return this.af.database.object(`lessons/${lessonKey}`).map(json => Lesson.fromJson(json));
  }


  findLessonByUrl(url) : Observable<Lesson> {

    return this.af.database.list('lessons', {
      query: {
        orderByChild: 'url',
        equalTo: url
      }
    })
    .map(results => results[0]);

  }


  findAllLessons(): Observable<Lesson[]> {
    return this.af.database.list('lessons', {
      query: {
        orderByKey: true
      }
    })
      .map(lessons => lessons.map(json => Lesson.fromJson(json)) );
  }




  createNewLesson(courseId:string, lesson:any): Observable<any> {

    const lessonToSave = Object.assign({}, lesson, {courseId});

    const newLessonKey = this.dbRef.child('lessons').push().key;

    const dataToSave = {};

    dataToSave["lessons/" + newLessonKey] = lessonToSave;
    dataToSave[`lessonsPerCourse/${courseId}/${newLessonKey}`] = true;

    return firebaseUpdateObs(this.dbRef, dataToSave);
  }



}








