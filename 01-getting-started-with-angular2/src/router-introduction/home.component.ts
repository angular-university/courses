
import {Component} from "@angular/core";
import {Lesson} from "./lesson";
import {Observable} from "rxjs/Observable";
import {LessonsList} from "./lessons-list.component";
import {LessonsService} from "./lessons.service";


@Component({
    selector: 'all-lessons',
    directives: [LessonsList],
    template: `

        <lessons-list [lessons]="lessons$ | async"></lessons-list>

    `
})
export class Home {

    lessons$: Observable<Lesson[]>;

    constructor(private lessonsService: LessonsService) {

        this.lessons$ = lessonsService.loadLessons();

    }

}