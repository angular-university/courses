

import {Component, OnDestroy} from "@angular/core";
import {lessonsData} from "./lessonsData";
import {LessonsList} from "./lessons-list.component";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";


@Component({
    selector:'course-detail',
    template: `

        <div>
            <h2>{{description}} Course id = {{courseId}}</h2>
            <div class="nav-fields">
                <button [routerLink]="['/courses',previous()]" class="nav-button">Previous</button>
                <button [routerLink]="['/courses', next()]" class="nav-button">Next</button>              
                <input (keyup)="dirty = true" placeholder="Edit Description">            
            </div>
            <lessons-list [lessons]="lessons"></lessons-list>        
        </div>
        

`
})
export class CourseDetail implements OnDestroy {


    courseId: number;

    lessons = lessonsData.lessons;
    description:string;

    paramsSub: Subscription;
    queryParamsSub: Subscription;

    dirty = false;



    constructor(route:ActivatedRoute) {

        this.paramsSub = route.params.subscribe(
            params =>{
                this.courseId = parseInt(params['id']);
                this.dirty = false;
            }
        );

        this.queryParamsSub = route.queryParams.subscribe(
            params => {
                this.description = params['description'];
            }
        );

        console.log('observers count',
            route.queryParams['observers'].length);

    }

    previous() {
        return this.courseId - 1;
    }

    next() {
        return this.courseId + 1;
    }


    ngOnDestroy() {
        this.paramsSub.unsubscribe();
        this.queryParamsSub.unsubscribe();
    }
}








