
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {LessonsList} from "./lessons-list.component";
import {HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";
import {LessonsService} from "./lessons.service";
import {initObservable} from "./init-observable";
import {Observable} from "rxjs/Observable";
import {Lesson} from './lesson';
import {ObservableReference} from "./obs-ref.directive";

declare const Rx;

@Component({
    selector:'app',
    directives: [LessonsList, ObservableReference],
    template: `

        <div>

            <input class="add-lesson" placeholder="Add Lesson" (keyup.enter)="createLesson(input.value)" #input>

            <div>Total Lessons: {{ (lessons | async)?.length }}</div>

            <div class="lesson-detail">
                
                <div>Lesson Id: {{ lesson.val?.id }}</div>
                <div>Lesson Id: {{ (firstLesson$ | async)?.url }}</div>
                <div>Lesson Id: {{ (firstLesson$ | async)?.description }}</div>
                <div>Lesson Id: {{ (firstLesson$ | async)?.duration }}</div>
                <div>Lesson Id: {{ (firstLesson$ | async)?.tags }}</div>

            </div>


            <lessons-list [lessons]="lessons.val"></lessons-list>
        
        </div>
        `
})
export class App {
    
    lessons$: Observable<Lesson>;

    firstLesson$: Observable<Lesson>;
    
    constructor(private lessonsService: LessonsService) {

        initObservable();

        this.lessons$ = lessonsService.loadLessons();

        this.firstLesson$ = lessonsService.loadLessons().map(lessons => lessons[0]);

    }

    createLesson(description) {
        this.lessonsService.createLesson(description);
    }



}

bootstrap(App, [LessonsService, ...HTTP_PROVIDERS]);