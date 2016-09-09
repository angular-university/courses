import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Course} from "./shared/model";


@Injectable()
export class CoursesService {

  courses$: Observable<Course[]>;

  constructor(af: AngularFire) {
    this.courses$ = af.database.object('/courses')
            .map(array => array.slice(1))
            .map((res:any[]) =>
              res.map(json => Course.fromJson(json, null)));
  }



}
