
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'hello-world',
    template: `<input (keyup)="model.test = input.value" #input>{{model.test}}`
})
export class HelloWorld {

    model = {
        test: 'Hello World !'
    }

}

bootstrap(HelloWorld);