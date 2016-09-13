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

  lesson:Lesson;

  nextLessonUrl = '';

  previousLessonUrl = '';



  constructor(private route:ActivatedRoute,
              private lessonsService:LessonsService,
              private coursesService:CoursesService) {

  }


  ngOnInit() {

    const lesson$ = this.route.params.switchMap(params => this.lessonsService.findLessonByUrl(params['id']));

    lesson$.subscribe(lesson => this.lesson = lesson);

    lesson$.switchMap(lesson => this.coursesService.loadLessonAfter(lesson.courseId, lesson))
      .map(lesson => lesson ? lesson.url : null)
      .subscribe(url => this.nextLessonUrl = url);


    lesson$.switchMap(lesson => this.coursesService.loadLessonBefore(lesson.courseId, lesson))
      .map(lesson => lesson ? lesson.url : null)
      .subscribe(url => this.previousLessonUrl = url);

  }


}
