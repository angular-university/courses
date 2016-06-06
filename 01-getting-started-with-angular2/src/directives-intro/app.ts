
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";



@Component({
    selector:'app',
    template: `
        
        <div collapsible class="card card-strong"> 
        
            <i class="md-icon collapsible-indicator">arrow_drop_down</i> 
            <i class="md-icon collapsible-indicator">arrow_drop_up</i>
            
            <div class="lesson-collapsible-section disable-text-selection">  
                This page section is collapsible, double click it and it will collapse or expand.
            </div>
        
        </div>
        
        `
})
export class App {


}

bootstrap(App);