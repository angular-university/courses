

import {Component} from "@angular/core";
import {lessonsData} from "./lessonsData";
import {LessonsList} from "./lessons-list.component";


@Component({
    selector: 'playlist',
    directives: [LessonsList],
    template: `

        <div class="playlist">
            <h1>Playlist</h1>
            <lessons-list [lessons]="lessons"></lessons-list>        
        </div>

    `
})
export class Playlist {


    lessons = lessonsData.lessons;

}