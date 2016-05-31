
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {LessonsList} from './lessons-list.component';
import {lessonsData} from "./lessons";


@Component({
    selector:'app',
    directives: [LessonsList],
    template: `<lessons-list [lessons]="lessons"></lessons-list>`
})
export class App {

    lessons = lessonsData;

}

bootstrap(App);