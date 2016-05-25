
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {SearchBox} from "./search-box/search-box.component";


@Component({
    selector:'app',
    directives: [SearchBox],
    template: `<search-box (search)="onSearch($event)"
                    text="Type Your Search Here">
               </search-box>`
})
export class App {


    onSearch(text) {
        alert(`From App Component: ${text}`);
    }

}

bootstrap(App);