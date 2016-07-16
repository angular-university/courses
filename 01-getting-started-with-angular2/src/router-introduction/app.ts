
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_DIRECTIVES, provideRouter} from "@angular/router";
import {routes} from "./router-config";
import {LessonsService} from "./lessons.service";
import {HTTP_PROVIDERS} from "@angular/http";


@Component({
    selector:'app',
    directives: [ROUTER_DIRECTIVES],
    template: `

    <header class="l-header v-center-parent">
        <img class="v-center" 
            src="https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png">
        <ul class="top-menu disable-link-styles">
            <li><a routerLink href="home">Home</a></li>
            <li><div routerLink="courses">Courses</div></li>
            <li><a [routerLink]="['lessons']">All Lessons</a></li>
        </ul>        
    </header>

    <main class="l-main l-sample-app">

        <img class="youtube-logo card card-strong" 
            src="https://i.ytimg.com/vi/s5y-4EpmfRQ/maxresdefault.jpg">
        
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