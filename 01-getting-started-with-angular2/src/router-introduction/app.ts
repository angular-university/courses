
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

    <header class="l-header v-center-parent">
        <img class="v-center" src="https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png">
            <ul class="top-menu">
                <li><a [routerLink]="['lessons']">Lessons</a></li>         
            </ul>        
    </header>

    <main class="l-main">

        <div class="course-logo"></div>
        <div class="lesson lesson-forms">

            <router-outlet></router-outlet>

        </div>


    </main>



        `
})
export class App {



}




bootstrap(App, [
    provideRouter(routes, {enableTracing:true}),
    LessonsService,
    ...HTTP_PROVIDERS
]);