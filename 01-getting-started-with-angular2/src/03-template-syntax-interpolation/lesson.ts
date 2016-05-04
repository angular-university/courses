
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


@Component({
    selector: 'app',
    template: `

            <label>Message:</label>{{ model?.message }}

        `
})
export class App {

    message = 'Hello World !';

    condition = true;

    model = {
        message: 'Hello World !'
    };

    get calculatedValue() {
        return "Calculated Value";
    }

}



bootstrap(App);

