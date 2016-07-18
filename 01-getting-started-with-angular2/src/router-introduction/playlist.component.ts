

import {Component} from "@angular/core";
import {lessonsData} from "./lessonsData";
import {LessonsList} from "./lessons-list.component";


@Component({
    selector: 'playlist',
    directives: [LessonsList],
    template: `

        <h1>Playlist</h1>
        <lessons-list [lessons]="lessons"></lessons-list>

    `
})
export class Playlist {


    lessons = lessonsData.lessons;

}