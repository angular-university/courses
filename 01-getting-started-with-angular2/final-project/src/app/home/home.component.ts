import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../lessons.service";
import {CoursesService} from "../courses.service";
import {Lesson} from "../shared/model/lesson";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lessons:Lesson[];


  constructor(private lessonsService: LessonsService) {


  }



  ngOnInit() {

     this.lessonsService.findAllLessons()
       .subscribe(lessons => this.lessons = lessons );


  }

}
