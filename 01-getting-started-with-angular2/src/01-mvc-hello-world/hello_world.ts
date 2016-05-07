
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'hello-world',
    template: `<input #input (keydown)="updateModel(input.value)">{{model.message}}`
})
export class HelloWorld {

    model = {
        message: 'Hello World !'
    };

    updateModel(newMessage) {
        this.model.message = '';
    }

}

bootstrap(HelloWorld);

