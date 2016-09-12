import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./shared/model";
import {Lesson} from "./shared/model";



@Injectable()
export class CoursesService {

  courses$: Observable<Course[]>;

  constructor(private af: AngularFire) {

    this.courses$ = af.database.list("courses")
      .map((res:any[]) =>
        res.map((json:any) => Course.fromJson(json, this.oneToMayCourseLessons(json.$key) )));

  }


  findCourseByUrl(url:string) {
    return this.courses$.flatMap(x => x).filter(course => course.url === url);
  }


  oneToMayCourseLessons(courseKey) : Observable<Lesson[]> {
    return this.af.database.list(`lessonsPerCourse/${courseKey}`)
      .switchMap(lessonKeys =>  Observable.combineLatest(lessonKeys.map(lessonKey => this.af.database.object(`lessons/${lessonKey.$value}`).map(json => Lesson.fromJson(json)) )));
  }


}
