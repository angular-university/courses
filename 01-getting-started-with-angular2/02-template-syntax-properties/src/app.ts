
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'app',
    template: `

        <div class="color-sample" [style.background]="'blue'">Color Sample</div>
        
        <button [disabled]="true">Disabled</button>
        
        <input [required]="true">
                
        `
})
export class App {


}

bootstrap(App);

