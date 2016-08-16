import {Component} from "@angular/core";
import {coursesData} from "./coursesData";
import {CoursesList} from "./courses-list.component";



@Component({
    selector: 'courses',
    template: `

        <h1>Courses</h1>

        <courses-list [courses]="courses"></courses-list>
        
    `
})
export class Courses {

    courses = coursesData.courses;

}