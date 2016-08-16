
import {Component} from "@angular/core";
import {LessonsList} from "./lessons-list.component";
import {lessonsData} from "./lessonsData";


@Component({
    selector: 'home',
    template: `

        <img class="youtube-logo card card-strong" 
            src="https://i.ytimg.com/vi/s5y-4EpmfRQ/maxresdefault.jpg">
        
        <div class="home-screen">
            <h2>Latest Lessons</h2>
            <lessons-list [lessons]="lessons"></lessons-list>        
        </div>


    `
})
export class Home {

    lessons = lessonsData.lessons;



}