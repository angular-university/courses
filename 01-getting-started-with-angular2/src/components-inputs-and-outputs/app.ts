
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

import {SearchBox} from "./search-box/search-box.component";


@Component({
    selector:'app',
    template: `<search-box (search)="onSearch($event)"
                    text="Type Your Search Here">
               </search-box>`
})
export class App {
    
    onSearch(text) {
        alert(`From App Component: ${text}`);
    }

}

@NgModule({
    declarations: [App, SearchBox],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);