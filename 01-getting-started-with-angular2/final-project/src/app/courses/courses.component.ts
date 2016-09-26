import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../shared/model/courses.service";
import {Observable} from "rxjs/Rx";
import {Course} from "../shared/model/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {

      this.courses$ = this.coursesService.findAllCourses();

  }

}
