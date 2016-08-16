
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

import {LessonsList} from "./lessons-list.component";
import {HttpModule} from "@angular/http";
import "rxjs/Rx";
import {LessonsService} from "./lessons.service";


@Component({
    selector:'app',
    template: `

        <input class="add-lesson" placeholder="Add Lesson"
            (keyup.enter)="lessonsService.createLesson(input.value)" #input>

        <lessons-list [lessons]="lessonsService.lessons"></lessons-list>

        `
})
export class App {
    
    constructor(private lessonsService: LessonsService) {

    }

}

@NgModule({
    declarations: [App, LessonsList],
    imports: [BrowserModule, HttpModule],
    bootstrap: [App],
    providers: [LessonsService]
})
export class AppModule {

}


platformBrowserDynamic().bootstrapModule(AppModule);