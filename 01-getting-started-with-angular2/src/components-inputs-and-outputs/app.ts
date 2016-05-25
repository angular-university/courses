
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {SearchBox} from "./search-box.component";


@Component({
    selector:'app',
    directives: [SearchBox],
    template: `<search-box text="Type Your Search Here"></search-box>`
})
export class App {



}

bootstrap(App);