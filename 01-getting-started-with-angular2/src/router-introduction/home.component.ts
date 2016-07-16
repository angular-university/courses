
import {Component} from "@angular/core";
import {Lesson} from "./lesson";
import {Observable} from "rxjs/Observable";
import {LessonsList} from "./lessons-list.component";
import {LessonsService} from "./lessons.service";


@Component({
    selector: 'home',
    directives: [LessonsList],
    template: `

        <h1>The Next YouTube ;-)</h1>

        <img class="youtube-logo card card-strong" 
            src="https://i.ytimg.com/vi/s5y-4EpmfRQ/maxresdefault.jpg">
        
        <div class="home-screen">
            <h2>Latest Lessons</h2>
            <lessons-list [lessons]="lessons$ | async"></lessons-list>        
        </div>


    `
})
export class Home {

    lessons$: Observable<Lesson[]>;

    constructor(private lessonsService: LessonsService) {

        this.lessons$ = lessonsService.loadLessons();

    }

}