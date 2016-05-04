
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'hello-world',
    template: ``
})
export class HelloWorld {

    model = {
        message: ''
    };

    updateModel(newMessage) {
        this.model.message = newMessage;
    }

}

bootstrap(HelloWorld);

