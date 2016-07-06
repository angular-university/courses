
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {Lesson, StudentLevel} from './lesson';



@Component({
    selector:'app',
    template: `

            <h3>Model Driven Forms</h3>
            
            <form [formGroup]="myForm" (ngSubmit)="createLesson(title)" autocomplete="off" novalidate>
            
                   <p>
                        <label>Title:</label>
                        <input  required minlength="5" maxlength="20">
                        <div class="field-error-message">field is mandatory</div>
                        <div class="field-error-message">min 5 chars</div>
                    <p>
                        <label>Duration:</label>
                        <input required pattern="[0-9]+">
                    </p>
                         
                    <p>
                        <label>Description:</label>
                        <textarea required minlength="150"></textarea>
                    </p>            
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

    lesson = new Lesson("Title goes here",0,  "Description goes here", StudentLevel.BEGINNER);


    constructor() {
        const level = StudentLevel.ADVANCED;
    }
    
    createLesson(title) {
        debugger;
    }

}

























bootstrap(App, [
    disableDeprecatedForms(),
    provideForms()]);