
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms, FormGroup, FormControl,
    REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder} from '@angular/forms';
import {Lesson, StudentLevel} from './lesson';
import "rxjs/Rx";
import {validateDuration} from "./validateDuration";



@Component({
    selector:'app',
    directives: [REACTIVE_FORM_DIRECTIVES],
    template: `

            <h3>Model Driven Forms</h3>
            
            <form [formGroup]="myForm" (ngSubmit)="createLesson(title)" autocomplete="off" novalidate>
               <p>
                    <label>Title:</label>
                    <input  required minlength="5" formControlName="title">
                    <div class="field-error-message" *ngIf="myForm.controls.title.errors?.required">field is mandatory</div>
                    <div class="field-error-message" *ngIf="myForm.controls.title.errors?.minlength">min 5 chars</div>
                <p>
                    <label>Duration:</label>
                    <input [formControl]="duration">
                </p>
                     
                <p>
                    <label>Description:</label>
                    <textarea required formControlName="description"></textarea>
                </p>            
                <p>
                    <button type="submit">Create Lesson</button>
                </p>
            </form>
            
            
            <div class="form-value">
                <h3>Form Value:</h3>
                {{ myForm.value | json }}            
            </div>
            
            <div class="form-value">
                <h3>Lesson Value:</h3>
                {{ lesson | json }}            
            </div>            

        `
})
export class App {

    lesson = new Lesson("Title goes here",0,  "Description goes here", StudentLevel.BEGINNER);

    myForm: FormGroup;

    duration = new FormControl(0, [validateDuration]);

    constructor(fb: FormBuilder) {

/*        this.myForm = new FormGroup({
            title: new FormControl('Initial Title', [Validators.required, Validators.minLength(5)]),
            duration: new FormControl(0, [Validators.required, Validators.pattern('[0-9]+')]),
            description: new FormControl("", Validators.required)
        });*/


        this.myForm = fb.group({
            title: ['Initial Value', [Validators.required, Validators.minLength(5)]],
            duration: this.duration,
            description: ["", []]
        });


        this.myForm.valueChanges
            .do(value => console.log("Form Value:", value))
            .filter(() => this.myForm.valid)
            .map(value => new Lesson(value.title, value.duration, value.description, StudentLevel.BEGINNER))
            .do(lesson => console.log("Valid Lesson:", lesson))
            .subscribe(
                lesson => this.lesson = lesson
            );


    }
    
    createLesson(title) {
        debugger;
    }

}

























bootstrap(App, [
    disableDeprecatedForms(),
    provideForms()]);