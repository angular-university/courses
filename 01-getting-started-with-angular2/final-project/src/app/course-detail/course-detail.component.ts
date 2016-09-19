import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";
import {FirebasePage} from "../shared/firebase/firebase-page";
import {CoursesService} from "../shared/model/courses.service";




@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  static PAGE_SIZE = 3;

  course:Course;
  lessonsPage:FirebasePage<Lesson>;

  savePage = (page) => this.lessonsPage = page;


  constructor(private route:ActivatedRoute, private coursesService:CoursesService) {

  }

  ngOnInit() {

    const course$ = this.route.params.switchMap(params =>  this.coursesService.findCourseByUrl(params['id']));

    course$.subscribe(course => this.course = course);

    course$.switchMap(course => this.coursesService.loadFirstPage(course.$key, CourseDetailComponent.PAGE_SIZE ))
      .subscribe(this.savePage);

  }

  previous() {
    this.coursesService.loadPreviousPage(this.course.$key, CourseDetailComponent.PAGE_SIZE, this.lessonsPage )
      .subscribe(this.savePage);

  }

  next() {
    this.coursesService.loadNextPage(this.course.$key, CourseDetailComponent.PAGE_SIZE, this.lessonsPage )
      .subscribe(this.savePage);
  }



}
