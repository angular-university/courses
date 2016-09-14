import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./shared/model";
import {Lesson} from "./shared/model";
import {LessonsService} from "./lessons.service";
import {FirebasePage} from "./shared/model/firebase-page";
const _ = require('lodash');

@Injectable()
export class CoursesService {

  courses$:Observable<Course[]>;

  constructor(private af:AngularFire, private lessonsService:LessonsService) {
    this.courses$ = af.database.list("courses")
      .map((res:any[]) =>
        res.map((json:any) => Course.fromJson(json)));
  }


  findCourseById(courseId:string) {
    return this.courses$.flatMap(x => x).filter(course => course.$key === courseId);
  }


  findCourseByUrl(url:string) {
    return this.courses$.flatMap(x => x).filter(course => course.url === url);
  }


  loadCourseLessonsPage(courseKey:string, pageSize:number, startAt:string = null): Observable<FirebasePage<Lesson>> {

    const queryParams:any = {
      query: {
        orderByKey: true,
        limitToFirst: pageSize
      }
    };

    if (startAt) {
      queryParams.query.startAt = startAt;
    }

    const lessonRefsPerCourse$ = this.af.database.list(`lessonsPerCourse/${courseKey}`, queryParams);

    const lessons$ = lessonRefsPerCourse$.map(lessonsRef => lessonsRef.map(ref => this.lessonsService.findLessonByKey(ref.$value)) )
                        .switchMap( firebaseObjectObservables => Observable.combineLatest(firebaseObjectObservables) )
                        .map(lessonsAsJson => lessonsAsJson.map(json => Lesson.fromJson(json)) );

    const firstLessonKey$ = lessonRefsPerCourse$.map(lessonsRef => _.first(lessonsRef).$key);

    const lastLessonKey$ = lessonRefsPerCourse$.map(lessonsRef => _.last(lessonsRef).$key);

    return Observable.combineLatest(lessons$, firstLessonKey$, lastLessonKey$).map((res:any[]) => new FirebasePage(<Lesson[]>res[0], res[1], res[2] ) );
  }


}
