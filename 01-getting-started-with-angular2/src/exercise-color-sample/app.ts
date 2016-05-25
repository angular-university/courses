
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ColorSample} from "./color-sample";

@Component({
    selector:'app',
    directives: [ColorSample],
    template: `<color-sample [color]="color"></color-sample>
                <input (keyup)="onType(input.value)" #input
                    placeholder="Type Your Color Here">`
})
export class App {

    color: string;

    onType(newColor) {
        this.color = newColor;
    }

}

bootstrap(App);