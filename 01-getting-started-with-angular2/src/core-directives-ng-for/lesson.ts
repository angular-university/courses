
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {Hero} from "./hero";
import {Heroes} from "./heroes";


@Component({ 
    selector: 'app',
    directives: [Hero, Heroes],
    template: `

            <heroes>
                <hero id="1" name="Superman"></hero>
                <hero id="2" name="Batman"></hero>
                <hero id="3" name="Wonder Woman"></hero>
                <hero id="3" name="Green Lantern"></hero>
                <hero id="4" name="Flash"></hero>
            </heroes>

        `
})
export class App {


}

bootstrap(App);

