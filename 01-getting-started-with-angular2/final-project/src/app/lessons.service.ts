

import {Injectable, Inject} from "@angular/core";
import {AngularFire, FirebaseRef} from "angularfire2";
import {Lesson} from "./shared/model/lesson";
import {Observable, Subject} from "rxjs/Rx";





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
      .do(console.log)
      .map(lessons => lessons.map(json => Lesson.fromJson(json)) );
  }




  createNewLesson(courseId:string, lesson:any): Observable<any> {

    const lessonToSave = Object.assign({}, lesson, {courseId});

    const pushKey = this.dbRef.child('lessons').push();

    const newLessonKey = pushKey.key;

    const dataToSave = {};

    dataToSave["lessons/" + newLessonKey] = lessonToSave;
    dataToSave[`lessonsPerCourse/${courseId}/${newLessonKey}`] = true;

    return firebaseUpdateToObs(this.dbRef, dataToSave);

  }


}


function firebaseUpdateToObs(dbRef, data) {

  const subject = new Subject();

  dbRef.update(data)
    .then(
      val => subject.next(val),
      err => subject.error(err)
    );

  return subject.asObservable();

}





