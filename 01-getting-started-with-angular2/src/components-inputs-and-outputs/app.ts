
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {SearchBox} from "./search-box.component";

@Component({
    selector:'app',
    directives: [SearchBox],
    template: ` <search-box></search-box>`
})
export class Main {



}

bootstrap(Main);