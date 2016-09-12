

import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";
import {Lesson} from "./shared/model/lesson";
import {Observable} from "rxjs/Rx";


@Injectable()
export class LessonsService {

  constructor(private af:AngularFire) {



  }


  findLessonByUrl(url) : Observable<Lesson> {

    return this.af.database.list('lessons', {
      query: {
        orderByChild: 'url',
        equalTo: url
      }
    })
    .map(results => results[0]);

  }


}
