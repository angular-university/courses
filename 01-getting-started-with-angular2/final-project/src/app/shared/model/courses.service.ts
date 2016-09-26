import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./course";
import {Lesson} from "./lesson";

@Injectable()
export class CoursesService {


    constructor(private af:AngularFire) {
    }

    findAllCourses():Observable<Course[]> {
        return this.af.database.list('courses').map(Course.fromJsonArray);
    }


    findAllLessonsForCourse(courseUrl:string):Observable<Lesson[]> {

        console.log(courseUrl);

        const course$ = this.af.database.list('courses', {
            query: {
                orderByChild: 'url',
                equalTo: courseUrl
            }
        })
        .map(results => results[0])
        .do(console.log);


        course$.subscribe();

        return Observable.of([]);

    }


}
