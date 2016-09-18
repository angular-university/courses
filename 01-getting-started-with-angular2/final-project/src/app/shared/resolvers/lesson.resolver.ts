

import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Lesson} from "../model/lesson";
import {Observable} from "rxjs/Rx";
import {LessonsService} from "../../lessons.service";
import {Injectable} from "@angular/core";


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
