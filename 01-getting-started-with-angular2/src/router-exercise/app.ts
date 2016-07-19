
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provideRouter, ROUTER_DIRECTIVES} from "@angular/router";
import {routeConfig} from "./router-config";


@Component({
    selector:'app',
    directives: [ROUTER_DIRECTIVES],
    template: `

  <header class="l-header v-center-parent">
    <img class="v-center" routerLink="home"
        src="https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png">
            
  </header>

  <main class="l-main l-sample-app">
    
    <div>
    
        <div class="main-container">

            <router-outlet></router-outlet>               
        
            <router-outlet name="section"></router-outlet>
                        

            

        </div>
    
    </div>

  </main>

        `
})
export class App {



}


bootstrap(App, [
    provideRouter(routeConfig, {enableTracing:true})
]);


















