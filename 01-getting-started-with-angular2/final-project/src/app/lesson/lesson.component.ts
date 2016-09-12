import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Lesson} from "../shared/model/lesson";
import {Observable} from "rxjs/Rx";
import {LessonsService} from "../lessons.service";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lesson$: Observable<Lesson>;


  constructor(private route:ActivatedRoute, private lessonsService: LessonsService) {

  }


  ngOnInit() {

      this.lesson$ = this.route.params.switchMap(params => this.lessonsService.findLessonByUrl(params['id']));

  }


}
