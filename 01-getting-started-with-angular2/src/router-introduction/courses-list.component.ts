
import {Component, Input} from "@angular/core";


@Component({
    selector:'courses-list',
    template: `
            <table class="courses-list card card-strong">
                <tr *ngFor="let course of courses">
                    <td>
                        <img class="lesson-logo" 
                        src="https://material.angularjs.org/latest/img/icons/angular-logo.svg">  
                    </td>
                    <td>
                        {{course.description}}    
                    </td>
                    <td>
                        <button>View</button>
                    </td>
                </tr>
           </table>

        `
})
export class CoursesList {


    @Input()
    courses = [];
    
    
    constructor() {
        
    }
    
    
    

}