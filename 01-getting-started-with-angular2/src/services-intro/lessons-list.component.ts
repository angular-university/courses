
import {Component, Input} from "@angular/core";


@Component({
    selector:'lessons-list',   
    template: `
            <table class="lessons-list card card-strong">
                <tr *ngFor="let lesson of lessons">
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