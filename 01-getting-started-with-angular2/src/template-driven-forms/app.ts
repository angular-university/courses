
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {Lesson} from './lesson';



@Component({
    selector:'app',
    template: `

            <h3>Create Lesson Form - Template Driven</h3>
            
            <form #f="ngForm" (ngSubmit)="createLesson(title)" autocomplete="off" novalidate>
                <p>
                    <label>Title:</label>
                    <input  [(ngModel)]="lesson.title" name="title" required minlength="5" maxlength="20" #title="ngModel">
                    <div class="field-error-message" *ngIf="title?.errors?.required">field is mandatory</div>
                    <div class="field-error-message" *ngIf="title?.errors?.minlength">min 5 chars</div>
                <p>
                    <label>Duration:</label>
                    <input [(ngModel)]="lesson.duration" name="duration" required pattern="[0-9]+">
                </p>
                <p>
                    <label>Description:</label>
                    <textarea [(ngModel)]="lesson.description" name="description" required minlength="150"></textarea>
                </p>
                <p>
                    <label>Level:</label>
                     <input type="radio" name="level" [(ngModel)]="beginner" value="beginner">Beginner
                     <input type="radio" name="level" [(ngModel)]="advanced" value="advanced">Advanced
                </p>
                <p>
                    <button type="submit" [disabled]="false">Create Lesson</button>
                </p>
            </form>                        

        `
})
export class App {
    

    lesson = new Lesson("Title goes here",0,  "Description goes here");
    
    
    createLesson(title) {
        debugger;
    }

}

























bootstrap(App, [
    disableDeprecatedForms(),
    provideForms()]);