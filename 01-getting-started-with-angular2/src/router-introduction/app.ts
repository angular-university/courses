
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routeConfig} from "./router-config";
import {SharedModule} from "./shared.module";
import {Home} from "./home.component";
import {Playlist} from "./playlist.component";
import {AllLessons} from "./all-lessons.component";


@Component({
    selector:'app',
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



@NgModule({
    declarations: [App, Home, Playlist, AllLessons],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routeConfig),
        SharedModule
    ],
    bootstrap: [App]

})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
















