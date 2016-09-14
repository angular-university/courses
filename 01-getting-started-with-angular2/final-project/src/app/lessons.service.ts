

import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Lesson} from "./shared/model/lesson";
import {Observable} from "rxjs/Rx";


@Injectable()
export class LessonsService {

  constructor(private af:AngularFire) {

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
    }).map(lessons => lessons.map(json => Lesson.fromJson(json)) );
  }


  createNewLesson(lesson:any): Observable<any> {
    return null;
  }


}
