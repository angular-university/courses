
import {Component, Input} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
    selector:'courses-list',
    template: `
            <table class="courses-list card card-strong">
                <tr class="course-summary" *ngFor="let course of courses" 
                    (click)="showCoursePlayList(course)">
                    <td>
                        <img class="lesson-logo" 
                        src="https://material.angularjs.org/latest/img/icons/angular-logo.svg">  
                    </td>
                    <td class="description">
                        {{course.description}}    
                    </td>
                    <td>
                        <button (click)="openCourse(course, $event)">View</button>
                    </td>
                </tr>
           </table>
           
           <router-outlet name="chat"></router-outlet>

        `
})
export class CoursesList {


    @Input()
    courses = [];


    constructor(private router:Router, private route: ActivatedRoute) {

    }


    openCourse(course, $event) {

        this.router.navigateByUrl(`/courses/${course.id}`);
        $event.stopPropagation();

    }

    showCoursePlayList(course) {

        this.router.navigateByUrl(
        `/courses(playlist:playlist;description=${course.description})`
        );

    }

    

}








