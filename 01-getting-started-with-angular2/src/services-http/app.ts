
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {LessonsList} from "./lessons-list.component";
import {HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";
import {LessonsService} from "./lessons.service";
import {initObservable} from "./init-observable";
import {Observable} from "rxjs/Observable";
import {Lesson} from "./lesson";

@Component({
    selector:'app',
    directives: [LessonsList],
    template: `

        <div>

            <input class="add-lesson" placeholder="Add Lesson" 
                (keyup.enter)="createLesson(input.value)" #input>

            <lessons-list [lessons]="lessons$ | async"></lessons-list>

        </div>
        `
})
export class App {

    lessons$: Observable<Lesson>;

    constructor(private lessonsService: LessonsService) {

        initObservable();

        this.lessons$ = lessonsService.loadLessons();
    }

    createLesson(description) {
        this.lessonsService.createLesson(description);
    }

}

bootstrap(App, [LessonsService, ...HTTP_PROVIDERS]);