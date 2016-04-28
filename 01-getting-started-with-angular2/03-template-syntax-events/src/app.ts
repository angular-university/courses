
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";


@Component({
    selector: 'app',
    template: `

            <input #input value="Hello World !">{{input.value}}

            <div class="toogle-panel" [style.visibility]="visibility">Toggle Me</div>

            <button (click)="onClick()">Click Me</button>

            <button (click)="toggle()">Toggle</button>
            
            <button id="button">Click Me Too</button>
            
            
                
        `
})
export class App {

    visibility = 'visible';

    constructor() {

        setTimeout(() => {
            document.querySelector('#button').addEventListener('click', () => {
                console.log('Hello World');
            });
        }, 2000);

    }

    onClick() {
        alert('Hello Events World !');
    }


    toggle() {
        this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';
    }



}



bootstrap(App);

