
import {Component, Input} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";


@Component({
    selector:'courses-list',
    directives: [ROUTER_DIRECTIVES],
    template: `
            <table class="courses-list card card-strong">
                <tr *ngFor="let course of courses">
                    <td>
                        <img class="lesson-logo" 
                        src="https://material.angularjs.org/latest/img/icons/angular-logo.svg">  
                    </td>
                    <td class="description">
                        {{course.description}}    
                    </td>
                    <td>
                        <button [routerLink]="course.id" 
                            [queryParams]="{description:course.description}">View</button>
                    </td>
                </tr>
           </table>

        `
})
export class CoursesList {


    @Input()
    courses = [];


    constructor(private router:Router) {

    }


    
    

}