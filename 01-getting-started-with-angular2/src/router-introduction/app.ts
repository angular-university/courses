
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_DIRECTIVES, provideRouter} from "@angular/router";
import {routes} from "./router-config";


@Component({
    selector:'app',
    directives: [ROUTER_DIRECTIVES],
    template: `

    <header class="l-header v-center-parent">
        <img  routerLink="home" class="v-center" 
            src="https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png">
        <ul class="top-menu disable-link-styles">
            <li><a routerLink="home">Home</a></li>
            <li><a routerLink="courses">Courses</a></li>
            <li><a [routerLink]="['lessons']">All Lessons</a></li>
        </ul>        
    </header>

    <main class="l-main l-sample-app">
        
        <div class="lesson lesson-forms">
        
            <router-outlet></router-outlet>

        </div>


    </main>

        `
})
export class App {



}


bootstrap(App, [
    provideRouter(routes, {enableTracing:true})
]);