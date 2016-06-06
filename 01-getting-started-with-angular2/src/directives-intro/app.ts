
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {Collapsible} from "./collapsible.directive";



@Component({
    selector:'app',
    directives: [Collapsible],
    template: `
        
        <div collapsible [collapsed]="false" class="card card-strong disable-text-selection">
            <i class="md-icon collapsible-indicator">arrow_drop_down</i> 
            <i class="md-icon collapsible-indicator">arrow_drop_up</i>
            <div class="collapsible-section">  
                This page section is collapsible, double click it and it will collapse or expand.
            </div>
        </div>
        `
})
export class App {


}

bootstrap(App);