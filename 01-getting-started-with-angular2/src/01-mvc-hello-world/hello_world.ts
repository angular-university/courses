
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'hello-world',
    template: `<input (keyup)="updateModel(input.value)" #input>{{model.message}}`
})
export class HelloWorld {

    model = {
        message: 'Hello World !'
    };

    updateModel(newMessage) {
        this.model.message = newMessage;
    }

}

bootstrap(HelloWorld);

