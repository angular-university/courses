
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {Lesson, StudentLevel} from "./lesson";
import {DurationValidator} from "./validate-duration.directive";


@Component({
    selector:'app',
    directives: [DurationValidator],
    template: `
 
    <h3>Create Lesson Form - Template Driven</h3>
    
    <form #f="ngForm" autocomplete="off" novalidate>
    
        <fieldset ngModelGroup="summary" #summary="ngModelGroup">
            <legend [ngStyle]="summaryStatus(summary)">Summary</legend>
            <div class="form-field">
                <label>Title:</label>
                <input name="title" [(ngModel)]="lesson.title" required 
                    minlength="10" maxlength="15" #title="ngModel">
                <div class="field-error-message" *ngIf="title?.dirty && title?.errors?.required">
                    field is mandatory</div>
                <div class="field-error-message" *ngIf="title?.dirty && title?.errors?.minlength">min 5 chars</div>                    
            </div>
            <div class="form-field">
                <label>Duration:</label>
                <input name="duration" [(ngModel)]="lesson.duration" duration>
            </div>
            <div class="form-field">
                <label>Level:</label>
                 <input type="radio" name="level" value="BEGINNER" [(ngModel)]="lesson.level">
                 Beginner
                 <input type="radio" name="level" value="ADVANCED" [(ngModel)]="lesson.level">
                 Advanced
            </div>     
        </fieldset>
            
        <fieldset>
            <legend>Long Text Fields</legend>
            <div class="form-field">
                <label>Description:</label>
                <textarea name="description" [(ngModel)]="lesson.description" required></textarea>
            </div>
        </fieldset>                    
            
        <p>
            <button [disabled]="!f.valid" class="lesson-button" type="submit" (click)="createLesson(f)">
            Create Lesson</button>
        </p>
        
    </form>
       
    <div class="debug">
        <h3>Form Value:</h3>
        {{ f.value | json }}
    </div>    
           

        `
})
export class App {

    lesson = new Lesson(
        "",
        10,
        "description goes here",
        StudentLevel.BEGINNER
    )

    createLesson(form) {
        console.log("Lesson Value:", this.lesson, form);
        debugger;
    }

    summaryStatus(summary) {
        return {
            color: !summary.valid && !summary.pristine ? 'red' : 'black'
        }
    }

}


















bootstrap(App, [
    disableDeprecatedForms(),
    provideForms()
]);