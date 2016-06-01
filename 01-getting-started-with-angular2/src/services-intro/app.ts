
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {LessonsList} from './lessons-list.component';
import {LessonsService} from './lessons.service';
import {HTTP_PROVIDERS} from "@angular/http";
import {lessonsData} from "./lessons";

import 'rxjs/Rx';


@Component({
    selector:'app',
    providers: [LessonsService],
    directives: [LessonsList],
    template: `
        
        <input class="add-lesson" placeholder="Add Lesson" (keyup.enter)="saveLesson(input.value)" #input>

        <lessons-list [lessons]="lessonsService.lessons"></lessons-list>
        `
})
export class App {

    constructor(private lessonsService: LessonsService) {

    }

    saveLesson(description) {
        this.lessonsService.saveLesson(description);
    }

}

bootstrap(App, [
    ...HTTP_PROVIDERS
]);