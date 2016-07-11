
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {Lesson, StudentLevel} from "./lesson";
import {DurationValidator} from "./validate-duration.directive";


@Component({
    selector:'app',
    directives: [DurationValidator],
    template: `

    <h3 [ngStyle]="{color: !f.valid  ? 'red' : 'black'}">Create Lesson Form - Template Driven</h3>
    
    <form #f="ngForm" (ngSubmit)="createLesson()" autocomplete="off" novalidate>
    
        <fieldset ngModelGroup="summary" #summary="ngModelGroup">
            <legend [ngStyle]="{color: !summary.valid && !summary.pristine ? 'red' : 'black'}">Summary</legend>
            <div class="form-field">
                <label>Title:</label>
                <input  [(ngModel)]="lesson.title" name="title" required minlength="5" #title="ngModel">
                <div class="field-error-message" *ngIf="title?.errors?.required">field is mandatory</div>
                <div class="field-error-message" *ngIf="title?.errors?.minlength">min 5 chars</div>
            </div>
            <div class="form-field">
                <label>Duration:</label>
                <input [(ngModel)]="lesson.duration" name="duration" duration>
            </div>
            <div class="form-field">
                <label>Level:</label>
                 <input type="radio" name="level" [(ngModel)]="lesson.level" value="BEGINNER">Beginner
                 <input type="radio" name="level" [(ngModel)]="lesson.level" value="ADVANCED">Advanced
            </div>     
        </fieldset>
        
        <fieldset ngModelGroup="text">
            <legend>Long Text Fields</legend>
            <div class="form-field">
                <label>Description:</label>
                <textarea [(ngModel)]="lesson.description" name="description" required></textarea>
            </div>                    
        </fieldset>                
    
        <p>
            <button class="lesson-button" type="submit">Create Lesson</button>
        </p>
        
    </form>
    
    <div class="debug">
        <h3>Form Value:</h3>
        {{ f.value | json }}            
    </div>
    
    <div class="debug">
        <h3>Lesson Value:</h3>
        {{ lesson | json }}            
    </div>         

        `
})
export class App {

    lesson = new Lesson("Title goes here",0,  "", "", StudentLevel.BEGINNER);


    constructor() {
        const level = StudentLevel.ADVANCED;
    }
    
    createLesson() {
        debugger;
    }

}




















bootstrap(App, [
    disableDeprecatedForms(),
    provideForms()
]);