import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonsService} from "../shared/model/lessons.service";
import {Lesson} from "../shared/model/lesson";
import * as _ from 'lodash';


@Component({
    selector: 'app-lesson-detail',
    templateUrl: './lesson-detail.component.html',
    styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {


    lesson:Lesson;

    constructor(private route:ActivatedRoute,
                private router:Router,
                private lessonsService:LessonsService) {


    }


    ngOnInit() {

        this.route.params.switchMap(
            params => {



                const lessonUrl = params['id'];

                return this.lessonsService.findLessonByUrl(lessonUrl);
            }
        )
        .do(console.log)
        .subscribe(lesson => this.lesson = lesson);


    }

    next() {

        this.lessonsService.loadNextLesson(this.lesson.courseId,this.lesson.$key)
            .subscribe(this.nativateToLesson.bind(this));

    }

    previous() {

        this.lessonsService.loadPreviousLesson(this.lesson.courseId,this.lesson.$key)
            .subscribe(this.nativateToLesson.bind(this));


    }


    nativateToLesson(lesson:Lesson) {

        this.router.navigate(['lessons', lesson.url]);
    }

}
