
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


@Component({
    selector: 'app',
    template: `

            <input value="Hello World !" #input>{{input.value}}

            <button (click)="onClick()">Click Me</button>

        `
})
export class App {

    onClick() {
        alert("Hello !");

        debugger;
    }


}



bootstrap(App);

