import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./course";
import {Lesson} from "./lesson";

@Injectable()
export class CoursesService {



  constructor(private af:AngularFire) { }



    findAllCourses(): Observable<Course[]> {
        return this.af.database.list('courses').map(Course.fromJsonArray);
    }


    findLessonsForCourse(courseUrl:string): Observable<Lesson[]> {

        console.log(courseUrl);

    }


}
