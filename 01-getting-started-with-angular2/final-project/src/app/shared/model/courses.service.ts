import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./course";

@Injectable()
export class CoursesService {



  constructor(private af:AngularFire) { }



    findAllCourses(): Observable<Course[]> {
        return this.af.database.list('courses').map(Course.fromJsonArray);
    }



}
