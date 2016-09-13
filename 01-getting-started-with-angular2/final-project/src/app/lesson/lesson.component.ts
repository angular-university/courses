import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Lesson} from "../shared/model/lesson";
import {Observable} from "rxjs/Rx";
import {LessonsService} from "../lessons.service";
import {CoursesService} from "../courses.service";
const _ = require('lodash');


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
              private coursesService:CoursesService,
              private router: Router) {

  }


  ngOnInit() {

    const lesson$ = this.route.params
                      .do(params => console.log('lesson url',params['id']))
                      .switchMap(params => this.lessonsService.findLessonByUrl(params['id']));

    lesson$.subscribe(lesson => this.lesson = lesson);

  }


  previous() {
    this.coursesService.loadCourseLessons(this.lesson.courseId)
      .subscribe(lessons => {

        const idx = _.findIndex(lessons, lesson => lesson.$key === this.lesson.$key);

        const previousLesson = (idx > 0 && idx < lessons.length) ? lessons[idx - 1] : null;

        if (previousLesson) {
          this.router.navigate(['lessons', previousLesson.url]);
        }

      });
  }


  next() {
    this.coursesService.loadCourseLessons(this.lesson.courseId)
      .subscribe(lessons => {

        const idx = _.findIndex(lessons, lesson => lesson.$key === this.lesson.$key);

        const nextLesson = (idx >= 0 && idx < lessons.length - 1) ? lessons[idx + 1] : null;

        if (nextLesson) {
          this.router.navigate(['lessons', nextLesson.url]);
        }

      });
  }


}
