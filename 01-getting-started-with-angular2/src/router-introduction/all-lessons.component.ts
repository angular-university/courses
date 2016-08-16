
import {Component} from "@angular/core";
import {LessonsList} from "./lessons-list.component";
import {lessonsData} from "./lessonsData";


@Component({
    selector: 'all-lessons',
    template: `

        <h1>All Lessons</h1>

        <lessons-list [lessons]="lessons"></lessons-list>

    `
})
export class AllLessons {

    lessons = lessonsData.lessons;


}