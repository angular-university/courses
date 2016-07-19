
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter, ROUTER_DIRECTIVES} from "@angular/router";
import {routeConfig} from "./router-config";
import {CanCourseDetailDeactivate} from "./course-detail-deactivate.guard";
import {CanCourseDetailActivate} from "./course-detail-activate.guard";


@Component({
    selector:'app',
    directives: [ROUTER_DIRECTIVES],
    template: `

  <header class="l-header v-center-parent">
    <img class="v-center" routerLink="home"
        src="https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png">
    
    <ul class="top-menu disable-link-styles" 
        routerLinkActive="menu-active" >
        <li>
            <a routerLink="" 
            routerLinkActive="menu-active" 
            [routerLinkActiveOptions]="{exact:true}">Home</a>
        </li>
        <li>
            <a routerLinkActive="menu-active"  
                routerLink="courses">Courses</a>
        </li>
        <li>
            <a routerLinkActive="menu-active" 
                [routerLink]="['lessons']">Lessons</a>
        </li>
    </ul>
            
  </header>

  <main class="l-main l-sample-app">
    
    <div>
    
        <div class="main-container">
            <div class="list">
                <router-outlet></router-outlet>            
            </div>
            <div class="list">
                <router-outlet name="playlist"></router-outlet>
            </div>        
        </div>
    
    </div>

  </main>

        `
})
export class App {



}


bootstrap(App, [
    provideRouter(routeConfig),
    CanCourseDetailDeactivate,
    CanCourseDetailActivate
]);


















