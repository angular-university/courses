
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ShowOneContainer} from "./show-one-container";
import {ShowOne} from "./show-one";
import {ShowOneTrigger} from "./show-one-trigger";


@Component({ 
    selector: 'app',
    directives: [ShowOne, ShowOneContainer, ShowOneTrigger],
    template: `

            <div class="tab-container" show-one-container> 
            
                <ul class="tab-buttons">
                    <li show-one-trigger="superman" class="selected">Superman</li>
                    <li show-one-trigger="batman">Batman</li>
                    <li show-one-trigger="flash">Flash</li>
                </ul>
            
                <div class="tab-panel" show-one="superman">
                    <div class="logo superman"></div>
                </div>
                
                <div class="tab-panel" show-one="batman">
                    <div class="logo batman"></div>
                </div>
                
                <div class="tab-panel" show-one="flash">
                    <div class="logo flash"></div>
                </div>
            
            </div>

        `
})
export class App {



}

bootstrap(App);

