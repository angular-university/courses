import {Component} from "@angular/core";
import {coursesData} from "./coursesData";
import {CoursesList} from "./courses-list.component";
import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
    selector: 'courses',
    directives: [CoursesList, ROUTER_DIRECTIVES],
    template: `

        <h1>Courses</h1>

        <courses-list [courses]="courses"></courses-list>
        
    `
})
export class Courses {

    courses = coursesData.courses;

}