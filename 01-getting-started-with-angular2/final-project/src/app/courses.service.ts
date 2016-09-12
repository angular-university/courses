import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./shared/model";
import {Lesson} from "./shared/model";
import {LessonsService} from "./lessons.service";



@Injectable()
export class CoursesService {

  courses$: Observable<Course[]>;

  constructor(private af: AngularFire, private lessonsService: LessonsService) {

    this.courses$ = af.database.list("courses")
      .map((res:any[]) =>
        res.map((json:any) => Course.fromJson(json, this.oneToMayCourseLessons(json.$key) )));

  }


  findCourseByUrl(url:string) {
    return this.courses$.flatMap(x => x).filter(course => course.url === url);
  }


  oneToMayCourseLessons(courseKey) : Observable<Lesson[]> {
    return this.af.database.list(`lessonsPerCourse/${courseKey}`)
      .map(lessonKeys => lessonKeys.map(lessonKey => this.lessonsService.findLessonByKey(lessonKey.$value))  )
      .switchMap((lessons$: Observable<Lesson>[]) => Observable.combineLatest(lessons$));
  }


}
