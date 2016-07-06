
import {Component, forwardRef} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms, NG_VALIDATORS} from '@angular/forms';
import {Lesson, StudentLevel} from './lesson';
import {DurationValidator} from "./validate-duration.directive";



@Component({
    selector:'app',
    directives: [DurationValidator],
    template: `

            <h3>Create Lesson Form - Template Driven</h3>
            
            <form #f="ngForm" (ngSubmit)="createLesson(title)" autocomplete="off" novalidate>
            
                <fieldset ngModelGroup="summary" #summary="ngModelGroup">
                    <legend [ngStyle]="{color: !summary.valid && !summary.pristine ? 'red' : 'black'}">Summary</legend>
                   <p>
                        <label>Title:</label>
                        <input  [(ngModel)]="lesson.title" name="title" required minlength="5" #title="ngModel">
                        <div class="field-error-message" *ngIf="title?.errors?.required">field is mandatory</div>
                        <div class="field-error-message" *ngIf="title?.errors?.minlength">min 5 chars</div>
                    <p>
                        <label>Duration:</label>
                        <input [(ngModel)]="lesson.duration" name="duration" duration>
                    </p>
                    <p>
                        <label>Level:</label>
                         <input type="radio" name="level" [(ngModel)]="lesson.level" value="BEGINNER">Beginner
                         <input type="radio" name="level" [(ngModel)]="lesson.level" value="ADVANCED">Advanced
                    </p>
                         
                </fieldset>
                
                <fieldset ngModelGroup="text">
                    <legend>Long Text Fields</legend>
                    <p>
                        <label>Description:</label>
                        <textarea [(ngModel)]="lesson.description" name="description" required minlength="150"></textarea>
                    </p>
                    <p>
                        <label>Transcript:</label>
                        <textarea [(ngModel)]="lesson.trancript" name="description" required minlength="150"></textarea>
                    </p>                    
                    <p>
                        <label>Level:</label>
                         <input type="radio" name="level" [(ngModel)]="lesson.level" value="BEGINNER">Beginner
                         <input type="radio" name="level" [(ngModel)]="lesson.level" value="ADVANCED">Advanced
                    </p>
                         
                </fieldset>                
            
                <p>
                    <button type="submit">Create Lesson</button>
                </p>
                
            </form>
            
            
            <div class="form-value">
                <h3>Form Value:</h3>
                {{ f.value | json }}            
            </div>
            
            <div class="form-value">
                <h3>Lesson Value:</h3>
                {{ lesson | json }}            
            </div>            

        `
})
export class App {

    lesson = new Lesson("Title goes here",0,  "Description goes here", "Transcript goes here", StudentLevel.BEGINNER);


    constructor() {
        const level = StudentLevel.ADVANCED;
    }
    
    createLesson(title) {
        debugger;
    }

}




















bootstrap(App, [
    disableDeprecatedForms(),
    provideForms(),
    {
        provide: NG_VALIDATORS,
        useExisting: DurationValidator,
        multi: true
    }
]);