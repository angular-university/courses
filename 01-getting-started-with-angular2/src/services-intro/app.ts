
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {LessonsList} from './lessons-list.component';
import {LessonsService} from './lessons.service';
import {lessonsData} from "./lessons";


@Component({
    selector:'app',
    providers: [LessonsService],
    directives: [LessonsList],
    template: `<lessons-list [lessons]="lessonsService.lessons"></lessons-list>`
})
export class App {

    constructor(private lessonsService: LessonsService) {

    }

}

bootstrap(App);