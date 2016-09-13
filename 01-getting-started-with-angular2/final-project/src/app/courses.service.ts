import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./shared/model";
import {Lesson} from "./shared/model";
import {LessonsService} from "./lessons.service";
const _ = require('lodash');

@Injectable()
export class CoursesService {

  courses$: Observable<Course[]>;

  constructor(private af: AngularFire, private lessonsService: LessonsService) {

    this.courses$ = af.database.list("courses")
      .map((res:any[]) =>
        res.map((json:any) => Course.fromJson(json )));

  }

  findCourseById(courseId:string) {
    return this.courses$.flatMap(x => x).filter(course => course.$key === courseId);
  }

  findCourseByUrl(url:string) {
    return this.courses$.flatMap(x => x).filter(course => course.url === url);
  }


  loadCourseLessons(courseKey) : Observable<Lesson[]> {
    return this.af.database.list(`lessonsPerCourse/${courseKey}`)
      .map(lessonKeys => lessonKeys.map(lessonKey => this.lessonsService.findLessonByKey(lessonKey.$value))  )
      .switchMap((lessons$: Observable<Lesson>[]) => Observable.combineLatest(lessons$));
  }

  loadLessonAfter(courseKey:string , currentLesson:Lesson): Observable<Lesson> {
    return this.loadCourseLessons(courseKey)
                  .map( lessons => {

                    const idx = _.findIndex(lessons, lesson => lesson.$key === currentLesson.$key);

                    return (idx >= 0 && idx < lessons.length - 1) ? lessons[idx + 1] : null;

                  });
  }


  loadLessonBefore(courseKey:string , currentLesson:Lesson): Observable<Lesson> {
    return this.loadCourseLessons(courseKey)
      .map( lessons => {

        const idx = _.findIndex(lessons, lesson => lesson.$key === currentLesson.$key);

        return (idx > 0 && idx < lessons.length) ? lessons[idx - 1] : null;

      });
  }


}
