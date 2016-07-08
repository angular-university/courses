
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import { ROUTER_DIRECTIVES , provideRouter} from '@angular/router';
import {routes} from "./router-config";
import {LessonsService} from "./lessons.service";
import {HTTP_PROVIDERS} from "@angular/http";


@Component({
    selector:'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
            
            <a [routerLink]="['lessons']">Lessons</a>
            <a [routerLink]="['stats']">Stats</a>
            
            <router-outlet></router-outlet>
            
        `
})
export class App {



}




bootstrap(App, [
    provideRouter(routes),
    LessonsService,
    ...HTTP_PROVIDERS
]);