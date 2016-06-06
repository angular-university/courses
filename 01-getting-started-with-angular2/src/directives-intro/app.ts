
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {CollapseOnClick} from "./collapse-on-click.directive";



@Component({
    selector:'app',
    directives: [CollapseOnClick],
    template: `
        
        <div collapse-on-click [collapsed]="!open" (collapsed)="open = !$event" class="card card-strong disable-text-selection">
            <i class="md-icon collapsible-indicator" *ngIf="open">arrow_drop_down</i>
             <i class="md-icon collapsible-indicator" *ngIf="!open">arrow_drop_up</i>
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