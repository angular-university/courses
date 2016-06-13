
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {LessonsList} from "./lessons-list.component";
import {HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";
import {LessonsService} from "./lessons.service";
import {initObservable} from "./init-observable";

declare const Rx;

@Component({
    selector:'app',
    directives: [LessonsList], 
    template: `

        <input class="add-lesson" placeholder="Add Lesson"
            (keyup.enter)="lessonsService.createLesson(input.value)" #input>

        <lessons-list [lessons]="lessonsService.lessons"></lessons-list>

        `
})
export class App {
    
    constructor(private lessonsService: LessonsService) {

        initObservable();

    }


}

bootstrap(App, [LessonsService, ...HTTP_PROVIDERS]);