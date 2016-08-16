
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, FormControl, ReactiveFormsModule} from "@angular/forms";
import {confirmPassword} from "./confirmPassword";


@Component({
    selector:'app',
    template: `

    <h3>Sign Up To Our Website</h3>
    
    <form #f="ngForm" (ngSubmit)="signUp()" autocomplete="off" novalidate>

        <div class="form-field">
            <label>Name:</label>
            <input [(ngModel)]="signup.name" name="name" required
                minlength="5" #name="ngModel">
            <div class="field-error-message" 
                *ngIf="name?.dirty && name?.errors?.required">name is mandatory</div>
        </div>            
        <div class="form-field">
            <label>Email:</label>
            <input name="email" [(ngModel)]="signUp.email" required
                #email="ngModel">
            <div class="field-error-message"
                *ngIf="email?.dirty && email?.errors?.required">email is mandatory</div>
        </div>
        <div class="form-field">
            <label>Password:</label>
            <input type="password" required [(ngModel)]="signup.password" 
                name="password">
        </div>
        <div class="form-field">
            <label>Confirm Password:</label>
            <input type="password" name="confirm" [formControl]="confirm">
        </div>                
    
        <p>
            <button class="lesson-button" type="submit"
                [disabled]="!f.valid">Sign Up</button>
        </p>
        
    </form>
    
    <div class="debug">
        <h3>Form Value:</h3>
        {{ f.value | json }}            
    </div>
            
        `
})
export class App {

    signup = {};

    confirm = new FormControl('', [confirmPassword.bind(undefined, this.signup)]);

    signUp() {
        console.log("Sign Up Data:" , this.signup);
    }


}




















@NgModule({
    declarations: [App],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);