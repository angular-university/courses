
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {Collapsible} from "./collapsible.directive";



@Component({
    selector:'app',
    directives: [Collapsible],
    template: `
        
        <div collapsible [collapsed]="!open" (collapsed)="open = !$event" class="card card-strong disable-text-selection">
            <i class="md-icon collapsible-indicator collapsible-indicator-down">arrow_drop_down</i> 
            <div class="collapsible-section">  
                This page section is collapsible, double click it and it will collapse or expand.
            </div>
        </div>
        `
})
export class App {

    open = true;

}

bootstrap(App);