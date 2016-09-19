

import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Lesson} from "../model/lesson";
import {Injectable} from "@angular/core";
import {LessonsService} from "../model/lessons.service";


@Injectable()
export class LessonResolver implements Resolve<Lesson> {


  constructor(private lessonsService: LessonsService) {

  }


  resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot) {

    console.log(route.params['id']);

    return this.lessonsService.findLessonByUrl("angular2-hello-world-write-first-application");

    //return Observable.from(null);

  }



}
