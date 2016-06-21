
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
                    <input  [(ngModel)]="lesson.title" name="title" required minlength="30" maxlength="50" #title="ngForm">
                    <span *ngIf="title?.errors?.required">Title is mandatory</span>
                <p>
                    <label>Duration (in sec.):</label>
                    <input [(ngModel)]="lesson.duration" name="duration" required pattern="[0-9]+">
                </p>
                <p>
                    <label>Description:</label>
                    <textarea [(ngModel)]="lesson.description" name="description" required minlength="150"></textarea>
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