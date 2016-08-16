
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";



@Component({
    selector: 'app',
    template: `

            <label>Message:</label>{{ model?.message }}

        `
})
export class App {

    message = 'Hello World !';

    condition = true;

    model = {
        message: 'Hello World !'
    };

    get calculatedValue() {
        return "Calculated Value";
    }

}



@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


