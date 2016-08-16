
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

import {ColorSample} from "./color-sample";

@Component({
    selector:'app',
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

@NgModule({
    declarations: [App, ColorSample],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);