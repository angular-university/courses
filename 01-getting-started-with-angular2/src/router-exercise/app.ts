
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

import {RouterModule} from "@angular/router";
import {routeConfig} from "./router-config";


@Component({
    selector:'app',
    template: `

  <header class="l-header v-center-parent">
    <img class="v-center" routerLink="home"
        src="https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png">
            
  </header>

  <main class="l-main l-sample-app">
    
    <div>
    
        <div class="main-container">
        
            <router-outlet></router-outlet>
            
            <router-outlet name="section1"></router-outlet>

            <router-outlet name="section2"></router-outlet>

            <router-outlet name="section3"></router-outlet>

        </div>
    
    </div>

  </main>

        `
})
export class App {



}


@NgModule({
    declarations: [App],
    imports: [BrowserModule, RouterModule.forRoot(routeConfig)],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


















