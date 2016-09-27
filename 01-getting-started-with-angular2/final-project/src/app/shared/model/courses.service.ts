import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./course";
import {Lesson} from "./lesson";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";

@Injectable()
export class CoursesService {


    constructor(private db:AngularFireDatabase) {
    }

    findAllCourses():Observable<Course[]> {
        return this.db.list('courses').map(Course.fromJsonArray);
    }


    findCourseByUrl(courseUrl:string): Observable<Course> {
        return this.db.list('courses', {
            query: {
                orderByChild: 'url',
                equalTo: courseUrl
            }
        })
        .map(results => results[0]);
    }


    findLessonKeysPerCourseUrl(courseUrl:string,
                               query: FirebaseListFactoryOpts = {}): Observable<string[]> {
        return this.findCourseByUrl(courseUrl)
            .do(val => console.log("course",val))
            .filter(course => !!course)
            .switchMap(course => this.db.list(`lessonsPerCourse/${course.$key}`,query))
            .map( lspc => lspc.map(lpc => lpc.$key) );
    }


    findLessonsForLessonKeys(lessonKeys$: Observable<string[]>) :Observable<Lesson[]> {
        return lessonKeys$
            .map(lspc => lspc.map(lessonKey => this.db.object('lessons/' + lessonKey)) )
            .flatMap(fbojs => Observable.combineLatest(fbojs) )

    }


    findAllLessonsForCourse(courseUrl:string):Observable<Lesson[]> {
        return this.findLessonsForLessonKeys(this.findLessonKeysPerCourseUrl(courseUrl));
    }


    loadFirstLessonsPage(courseUrl:string, pageSize:number): Observable<Lesson[]> {

        const firstPageLessonKeys$ = this.findLessonKeysPerCourseUrl(courseUrl,
            {
                query: {
                    limitToFirst:pageSize
                }
            });

        return this.findLessonsForLessonKeys(firstPageLessonKeys$);
    }




    loadNextPage(courseUrl:string, lessonKey:string, pageSize:number): Observable<Lesson[]> {

        const lessonKeys$ = this.findLessonKeysPerCourseUrl(courseUrl,
            {
                query: {
                    orderByKey:true,
                    limitToFirst:pageSize + 1,
                    startAt: lessonKey
                }
            });

        return this.findLessonsForLessonKeys(lessonKeys$);
    }



}
