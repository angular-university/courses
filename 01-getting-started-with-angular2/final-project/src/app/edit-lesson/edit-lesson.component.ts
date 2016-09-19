import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from "../shared/model/lesson";
import {LessonsService} from "../shared/model/lessons.service";




@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent {

  lesson: Lesson;

  constructor(private route:ActivatedRoute, private lessonsService: LessonsService) {

    route.data.subscribe(data => this.lesson = data['lesson']);



  }


  save(json) {

    this.lessonsService.saveLesson(this.lesson.$key, json)
      .subscribe(
        () => {
          alert("lesson saved succesfully.");
        },
        err => alert(`error saving lesson ${err}`)
      );

  }




}
