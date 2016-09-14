import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../lessons.service";

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css']
})
export class NewLessonComponent implements OnInit {


  constructor(private lessonsService: LessonsService) {


  }

  ngOnInit() {

  }

  save(lesson) {
    console.log(lesson);
    this.lessonsService.createNewLesson(lesson)
      .subscribe(
        () => {},
        err => alert(err)
      );

  }

}
