
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {
    disableDeprecatedForms,
    provideForms,
    FormGroup,
    FormControl,
    REACTIVE_FORM_DIRECTIVES,
    Validators,
    FormBuilder
} from "@angular/forms";
import {Lesson, StudentLevel} from "./lesson";
import "rxjs/Rx";
import {validateDuration} from "./validateDuration";


@Component({
    selector:'app',
    directives: [REACTIVE_FORM_DIRECTIVES],
    template: `

    <h3>Model Driven Forms</h3>
    
    <form [formGroup]="myForm" autocomplete="off" novalidate>
       <div class="form-field">
            <label>Title:</label>
            <input formControlName="title">
            <div class="field-error-message" 
                *ngIf="myForm.controls.title.errors?.required">
                field is mandatory
            </div>
        </div>
        <div class="form-field">
            <label>Duration:</label>
            <input formControlName="duration">
        </div> 
        <div class="form-field">
            <label>Description:</label>
            <textarea formControlName="description"></textarea>
        </div>            
        <div class="form-field">
            <button class="lesson-button" type="submit">Create Lesson</button>
        </div>
    </form>
    
    <div class="debug">
        <h3>Lesson Value:</h3>
        {{ lesson | json }}
    </div>    
          

        `
})
export class App {

    myForm: FormGroup;

    duration = new FormControl(10, [validateDuration]);

    lesson = new Lesson(
        "Title goes here",
        0,
        "Description goes here",
        "Transcript goes here",
        StudentLevel.BEGINNER
    );

    constructor(fb: FormBuilder) {

        this.myForm = fb.group({
            title: ['This is the title', [
                    Validators.required,
                    Validators.minLength(5)]
                ],
            duration: this.duration,
            description: ['description goes here',[Validators.required]]
        });

        this.myForm.valueChanges
            .filter(() => this.myForm.valid)
            .map(value => new Lesson(value.title, value.duration,
                value.description,"",StudentLevel.BEGINNER))
            .do(formValue => console.log("Valid Form Value:", formValue))
            .subscribe(
                lesson => this.lesson = lesson
            );

    }

}

























bootstrap(App, [
    disableDeprecatedForms(),
    provideForms()]);