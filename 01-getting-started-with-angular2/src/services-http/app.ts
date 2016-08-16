
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

import {LessonsList} from "./lessons-list.component";
import {HttpModule} from "@angular/http";
import "rxjs/Rx";
import {LessonsService} from "./lessons.service";
import {initObservable} from "./init-observable";
import {Observable} from "rxjs/Observable";
import {Lesson} from "./lesson";

@Component({
    selector:'app',
    template: `

        <div>

            <input class="add-lesson" placeholder="Add Lesson" 
                (keyup.enter)="createLesson(input.value)" #input>
                
                <button (click)="chain()">Chain</button>

            <lessons-list [lessons]="lessons$ | async"></lessons-list>

        </div>
        `
})
export class App {

    lessons$: Observable<Lesson[]>;

    constructor(private lessonsService: LessonsService) {

        initObservable();

        this.lessons$ = lessonsService.loadLessons();
    }

    createLesson(description) {
        this.lessonsService.createLesson(description);
    }

    chain() {

        const lesson = "Lesson 1";

        const lesson2 = "Lesson2";

        const chain$ = this.lessonsService.createLesson(lesson)
            .switchMap(results => {
                console.log('result', results);
                return this.lessonsService.createLesson(lesson2)
            })
            .switchMap((results2) => {
                console.log(results2);
                return this.lessonsService.loadLessons();
            })
            .cache();


        this.lessons$ = chain$;

        chain$.subscribe();


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

