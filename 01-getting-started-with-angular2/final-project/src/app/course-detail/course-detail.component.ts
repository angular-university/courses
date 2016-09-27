import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../shared/model/courses.service";
import {Lesson} from "../shared/model/lesson";
import {Observable} from "rxjs/Rx";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../shared/model/course";


@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

    course$:Observable<Course>;
    lessons:Lesson[];

    courseUrl:string;

    constructor(private route:ActivatedRoute,
                private coursesService:CoursesService) {


    }

    ngOnInit() {

        this.courseUrl = this.route.snapshot.params['id'];

        this.course$ = this.coursesService.findCourseByUrl(this.courseUrl);

        const lessons$ = this.coursesService.loadFirstLessonsPage(this.courseUrl, 3)
            .do(val => console.log("load first page",val));

        lessons$.subscribe(lessons => this.lessons = lessons);

    }

    previous() {

    }


    next() {

        this.coursesService.loadNextPage(
            this.courseUrl,
            this.lessons[this.lessons.length - 1].$key,
            3
        )
        .do(val => console.log("next page received", val))
        .subscribe(lessons => this.lessons = lessons );



    }

}







