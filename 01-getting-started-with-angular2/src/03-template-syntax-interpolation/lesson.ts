
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";


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

