
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";


@Component({
    selector: 'app',
    template: `

            <input value="Hello World !" #input>{{input.value}}
            
            <button (click)="onClick()">Click Me</button>
            
            <button (click)="addListener()">Setup</button>
            
            <button id="btn">Click Me Too</button>
            
                
        `
})
export class App {

    addListener() {
        document.querySelector('#btn')
            .addEventListener('click', function() {
                console.log('Hello World !');
                debugger;
            });
    }

    onClick() {
        alert("Hello !");
    }

}



bootstrap(App);

