

import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'app',
    template: `<input placeholder="Type hello world !" (keyup)="hello(input.value)" #input>{{message}}`
})
export class App {

    private message = "";

    hello(value) {
        this.message = value;
    }
}

bootstrap(App, []);
