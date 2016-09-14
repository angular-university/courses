import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Lesson} from "../shared/model/lesson";

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      description: ['',Validators.required],
      url: ['',Validators.required],
      videoUrl: ['',Validators.required],
      tags: ['',Validators.required],
      longDescription: ['']
    });

  }

  ngOnInit() {

  }


  isErrorVisible(field:string, error:string) {
    return this.form.controls[field].dirty &&this.form.controls[field].errors && this.form.controls[field].errors[error];
  }


  save() {

  }

}


