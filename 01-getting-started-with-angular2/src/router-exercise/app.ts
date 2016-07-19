
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

            <h1>Dashboard</h1>
            <p>click on a checkbox to include a section</p>  
                  
            <div class="toggle-buttons">
                <input class="graph-toggle" type="checkbox">Graph 1  
                <input class="graph-toggle" type="checkbox">Graph 2
                <input class="graph-toggle" type="checkbox">Graph 3
            </div>
                          
            <img class="card card-very-strong dashboard-section" 
                src="/images/dashboard-section-1.png">
        
            <img class="card card-very-strong dashboard-section" 
                src="/images/dashboard-section-2.png">
            
            <img class="card card-very-strong dashboard-section" 
                src="/images/dashboard-section-3.png">

        </div>
    
    </div>

  </main>

        `
})
export class App {



}


bootstrap(App, [
    provideRouter(routeConfig)
]);


















