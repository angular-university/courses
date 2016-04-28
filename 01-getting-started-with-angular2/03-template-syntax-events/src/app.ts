
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";


@Component({
    selector: 'app',
    template: `

            <input #input value="Hello World !">{{input.value}}

            <button (click)="onClick()">Click Me</button>
            
            <button id="button">Click Me Too</button>
                
        `
})
export class App {


    onClick() {
        alert('Hello Events World !');
    }

    /*
     document.querySelector('#button').addEventListener('click', () => {
         console.log('Hello World');
     });
     */


}



bootstrap(App);

