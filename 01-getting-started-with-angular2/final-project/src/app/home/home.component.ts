import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../shared/model/lessons.service";
import {CoursesService} from "../shared/model/courses.service";
import {Lesson} from "../shared/model/lesson";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allLessons:Lesson[];
  filtered:Lesson[];


  constructor(private lessonsService: LessonsService) {

  }


  ngOnInit() {
     this.lessonsService.findAllLessons()
       .subscribe(lessons => this.allLessons = this.filtered = lessons );
  }



  search(search:string) {
    this.filtered = this.allLessons.filter(lesson => lesson.description.includes(search)  );
  }


}
