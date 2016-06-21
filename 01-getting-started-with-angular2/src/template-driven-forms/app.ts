
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from '@angular/forms';




@Component({
    selector:'app',
    template: `

            <h1>Template Driven Forms</h1>

        `
})
export class App {
    


}

























bootstrap(App, [
    disableDeprecatedForms(),
    provideForms()]);