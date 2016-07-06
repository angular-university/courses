
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import { ROUTER_DIRECTIVES , provideRouter} from '@angular/router';
import {routes} from "./router-config";


@Component({
    selector:'app',
    directives: [ROUTER_DIRECTIVES],
    template: `

            <h1>Hello Router World !</h1>
            
        `
})
export class App {



}




bootstrap(App, [
    provideRouter(routes)
]);