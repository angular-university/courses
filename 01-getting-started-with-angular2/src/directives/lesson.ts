
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ShowOneContainer} from "./show-one-container";
import {ShowOne} from "./show-one";
import {ShowOneTrigger} from "./show-one-trigger";


@Component({ 
    selector: 'app',
    directives: [ShowOne, ShowOneContainer, ShowOneTrigger],
    template: `

            <div class="tab-container" showOneContainer> 
            
                <ul class="tab-buttons">
                    <li showOneTrigger="superman" class="selected">Superman</li>
                    <li>Batman</li>
                    <li>Flash</li>
                </ul>
            
                <div class="tab-panel">
                    <div class="logo superman"></div>
                </div>
                
                <div class="tab-panel">
                    <div class="logo batman"></div>
                </div>
                
                <div class="tab-panel">
                    <div class="logo flash"></div>
                </div>
            
            </div>

        `
})
export class App {



}

bootstrap(App);

