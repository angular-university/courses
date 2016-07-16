
import {Component} from "@angular/core";
import {LessonsList} from "./lessons-list.component";


@Component({
    selector: 'all-lessons',
    directives: [LessonsList],
    template: `

        <h1>Courses</h1>

    `
})
export class Courses {


    constructor() {


    }

}