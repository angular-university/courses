import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Lesson} from "./lesson";
import {AngularFire} from "angularfire2";

@Injectable()
export class LessonsService {

  constructor(private af: AngularFire) { }


  findAllLessons(): Observable<Lesson[]> {

    return this.af.database.list('lessons')
        .do(console.log)
        .map(Lesson.fromJsonList);

  }

    findLessonByUrl(url:string): Observable<Lesson> {
       return this.af.database.list('lessons', {
           query: {
               orderByChild: 'url',
               equalTo: url
           }
        })
        .map(results => Lesson.fromJson(results[0]));
    }

}
