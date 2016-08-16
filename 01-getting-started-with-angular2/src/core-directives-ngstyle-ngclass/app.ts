
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

import {Hero} from "./hero";
import {Heroes} from "./heroes";


@Component({ 
    selector: 'app',
    template: `

            <heroes>
                <hero id="1" name="Superman"></hero>
                <hero id="2" [name]="'Batman'"></hero>
                <hero id="3" [name]="'Spiderman'" marvel="true"></hero>
                <hero id="4" name="Batgirl"></hero>
                <hero id="3" name="Hulk" marvel="true"></hero>
                <hero id="5" name="Robin"></hero>
                <hero id="6" name="Flash"></hero>
            </heroes>

        `
})
export class App {


}

@NgModule({
    declarations: [App, Hero, Heroes],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

