import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesService} from "../courses.service";
import {Observable} from "rxjs/Rx";
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course$:Observable<Course>;
  lessons$:Observable<Lesson[]>;

  constructor(private route:ActivatedRoute, private coursesService:CoursesService) {

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.course$ = this.coursesService.findCourseByUrl(params['id']);
      this.lessons$ = this.course$.flatMap(course => course.lessons$);
    });


  }

}
