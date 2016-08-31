
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import "rxjs/Rx";
import {LessonsService} from "./lessons.service";
import {LessonsModule} from "./lessons.module";


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
    declarations: [App],
    imports: [BrowserModule, HttpModule, LessonsModule],
    bootstrap: [App]
})
export class AppModule {

}


platformBrowserDynamic().bootstrapModule(AppModule);