import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class CoursesService {

  constructor(af: AngularFire) {

    const data = af.database.object('/courses');

    data.subscribe( val => console.log(val) );

  }

}
