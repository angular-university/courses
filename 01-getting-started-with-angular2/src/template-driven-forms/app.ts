
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic"; 
import {HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";


@Component({
    selector:'app',
    template: `

            <h1>Template Driven Forms</h1>

        `
})
export class App {
    


}

bootstrap(App, []);