
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {Hero} from "./hero";
import {Heroes} from "./heroes";


@Component({ 
    selector: 'app',
    directives: [Hero, Heroes],
    template: `

            <heroes>
                <hero id="1" [name]="'Superman'"></hero>
            </heroes>
             



        `
})
export class App {

    
}


bootstrap(App);

