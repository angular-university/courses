
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";



@Component({
    selector: 'app',
    template: `

            <input value="Hello World !" #input>{{input.value}}

            <button (click)="onClick()">Click Me</button>

        `
})
export class App {

    onClick() {
        alert("Hello !");

        debugger;
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

