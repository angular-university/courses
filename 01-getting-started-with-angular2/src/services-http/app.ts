
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


        chain$.subscribe();


    }

}

bootstrap(App, [LessonsService, ...HTTP_PROVIDERS]);