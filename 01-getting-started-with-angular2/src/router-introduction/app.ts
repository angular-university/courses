
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

            <div class="top-menu">
                <a [routerLink]="['lessons']">Lessons</a>
                <a [routerLink]="['stats']">Stats</a>            
            </div>

            <router-outlet></router-outlet>

        `
})
export class App {



}




bootstrap(App, [
    provideRouter(routes, {enableTracing: true}),
    LessonsService,
    ...HTTP_PROVIDERS
]);