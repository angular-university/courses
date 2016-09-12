import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./shared/model";
import {Lesson} from "./shared/model";



@Injectable()
export class CoursesService {

  courses$: Observable<Course[]>;

  constructor(private af: AngularFire) {

    this.courses$ = af.database.list("courses");

/*
    this.courses$ = af.database.object('/courses')
            .map(array => array.slice(1))
            .map((res:any[]) =>
              res.map(json => Course.fromJson(json, this.buildLessonsObs(Object.keys(json.lessons)) )));
*/
  }


  findCourseByUrl(url:string) {
    return this.courses$.flatMap(x => x).filter(course => course.url === url);
  }


  buildLessonsObs(lessonIds) : Observable<Lesson[]> {

    const lessons$ = lessonIds.map(lessonId => this.af.database.object(`/lessons/${lessonId}`));

    return Observable.combineLatest(lessons$);
  }


}
