
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";


@Component({
    selector: 'app',
    template: `

            <div class="toogle-panel" [style.visibility]="visibility">Toggle Me</div>

            <button (click)="toggle()">Click Me</button>
            
            

                
        `
})
export class App {

    visibility = 'hidden';

    onClick() {
        alert('Hello Events World !');
    }


    toggle() {
        this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';
    }



}



bootstrap(App);

