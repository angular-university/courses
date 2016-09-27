import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Lesson} from "./lesson";
import {AngularFire, AngularFireDatabase} from "angularfire2";

@Injectable()
export class LessonsService {

    constructor(private db:AngularFireDatabase) {
    }


    findAllLessons():Observable<Lesson[]> {

        return this.db.list('lessons')
            .do(console.log)
            .map(Lesson.fromJsonList);

    }

    findLessonByUrl(url:string):Observable<Lesson> {
        return this.db.list('lessons', {
            query: {
                orderByChild: 'url',
                equalTo: url
            }
        })
            .map(results => Lesson.fromJson(results[0]));
    }


    loadNextLesson(courseId:string, lessonId:string):Observable<Lesson> {
        return this.db.list(`lessonsPerCourse/${courseId}`, {
            query: {
                orderByKey: true,
                startAt: lessonId,
                limitToFirst: 2
            }
        })
        .map(results => results[1].$key)
        .switchMap(lessonId => this.db.object(`lessons/${lessonId}`))
        .map(Lesson.fromJson);
    }


    loadPreviousLesson(courseId:string, lessonId:string):Observable<Lesson> {
        return this.db.list(`lessonsPerCourse/${courseId}`, {
            query: {
                orderByKey: true,
                endAt: lessonId,
                limitToLast: 2
            }
        })
        .map(results => results[1].$key)
        .switchMap(lessonId => this.db.object(`lessons/${lessonId}`))
        .map(Lesson.fromJson);
    }


}
