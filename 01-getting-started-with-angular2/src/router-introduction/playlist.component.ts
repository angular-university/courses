

import {Component} from "@angular/core";
import {lessonsData} from "./lessonsData";
import {LessonsList} from "./lessons-list.component";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'playlist',
    template: `

        <div class="playlist">
            <h1>{{description}}</h1>
            <lessons-list [lessons]="lessons"></lessons-list>        
        </div>

    `
})
export class Playlist {

    description:string;

    lessons = lessonsData.lessons;


    constructor(route: ActivatedRoute) {

        route.params.subscribe(
            params => this.description = params['description']
        );

    }

}