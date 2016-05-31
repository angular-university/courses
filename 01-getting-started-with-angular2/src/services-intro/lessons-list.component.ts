
import {Component, Input} from "@angular/core";


@Component({
    selector:'lessons-list',
    template: `
            <table class="lessons-list card card-strong">
                <tr *ngFor="let lesson of lessons">
                    <td>
                        <img class="lesson-logo" src="https://material.angularjs.org/latest/img/icons/angular-logo.svg">  
                    </td>
                    <td>
                        {{lesson.description}}    
                    </td>
                </tr>
           </table>

        `
})
export class LessonsList {


    @Input()
    lessons = [];

}