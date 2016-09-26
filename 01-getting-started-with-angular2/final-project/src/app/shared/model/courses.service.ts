import {Injectable} from '@angular/core';
import {AngularFire, AngularFireDatabase} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./course";
import {Lesson} from "./lesson";

@Injectable()
export class CoursesService {


    constructor(private db:AngularFireDatabase) {
    }

    findAllCourses():Observable<Course[]> {
        return this.db.list('courses').map(Course.fromJsonArray);
    }


    findAllLessonsForCourse(courseUrl:string):Observable<Lesson[]> {

        console.log(courseUrl);

        const course$ = this.db.list('courses', {
            query: {
                orderByChild: 'url',
                equalTo: courseUrl
            }
        })
        .map(results => results[0]);


        const lessonsPerCourse$ = course$
            .switchMap(course => this.db.list(`lessonsPerCourse/${course.$key}`));


        const courses$ = lessonsPerCourse$
                .switchMap(lspc => lspc.map(lpc => this.db.object('lessons/' + lpc.$key)) )
                .do(console.log);



        courses$.subscribe();



        return Observable.of([]);

    }


}
