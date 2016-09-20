import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Lesson} from "../shared/model/lesson";
import {LessonsService} from "../shared/model/lessons.service";
import {CoursesService} from "../shared/model/courses.service";
import {LessonsRestService} from "../shared/model/lessons-rest.service";
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
              private router: Router,
              private lessonsRestService: LessonsRestService) {

  }


  ngOnInit() {

    const lesson$ = this.route.params
                      .switchMap(params => this.lessonsService.findLessonByUrl(params['id']));

    lesson$.subscribe(lesson => this.lesson = lesson);

  }


  previous() {
    this.coursesService.loadAllCourseLessons(this.lesson.courseId)
      .subscribe(lessons => {

        const idx = _.findIndex(lessons, lesson => lesson.$key === this.lesson.$key);

        const previousLesson = (idx > 0 && idx < lessons.length) ? lessons[idx - 1] : null;

        if (previousLesson) {
          this.router.navigate(['lessons', previousLesson.url]);
        }

      });
  }


  next() {
    this.coursesService.loadAllCourseLessons(this.lesson.courseId)
      .subscribe(lessons => {

        const idx = _.findIndex(lessons, lesson => lesson.$key === this.lesson.$key);

        const nextLesson = (idx >= 0 && idx < lessons.length - 1) ? lessons[idx + 1] : null;

        if (nextLesson) {
          this.router.navigate(['lessons', nextLesson.url]);
        }

      });
  }


  delete() {
    this.lessonsRestService.deleteLesson(this.lesson.$key)
      .subscribe(
        () => {
          alert("lesson deleted !");
          this.router.navigate(['/home']);
        }
      )
  }

  requestLessonDeletion() {
    this.lessonsService.requestLessonDeletion(this.lesson.$key, this.lesson.courseId);
  }





}
