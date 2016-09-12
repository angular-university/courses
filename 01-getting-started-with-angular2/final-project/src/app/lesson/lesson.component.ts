import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Lesson} from "../shared/model/lesson";
import {Observable} from "rxjs/Rx";
import {LessonsService} from "../lessons.service";
import {CoursesService} from "../courses.service";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lesson$:Observable<Lesson>;

  nextLessonUrl$:Observable<string>;


  constructor(private route:ActivatedRoute,
              private lessonsService:LessonsService,
              private coursesService:CoursesService) {

  }


  ngOnInit() {

    this.lesson$ = this.route.params.switchMap(params => this.lessonsService.findLessonByUrl(params['id']));

    this.nextLessonUrl$ = this.lesson$.switchMap(lesson => this.coursesService.loadLessonAfter(lesson.courseId, lesson))
      .do(lesson => console.log(lesson))
      .map(lesson => lesson.url);
  }


}
