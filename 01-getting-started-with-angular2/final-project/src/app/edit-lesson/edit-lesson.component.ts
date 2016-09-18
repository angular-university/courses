import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {


  constructor(private route:ActivatedRoute) {

    route.data.subscribe(console.log);



  }




  ngOnInit() {

  }




}
