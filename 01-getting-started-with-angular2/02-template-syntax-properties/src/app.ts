
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'app',
    template: `<input [style.color]="'red'">`
})
export class App {


}

bootstrap(App);

