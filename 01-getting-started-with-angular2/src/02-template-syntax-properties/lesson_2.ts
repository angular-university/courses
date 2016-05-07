
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


@Component({
    selector: 'app',
    template: `
 
        <div class="color-sample" [style.background]="'red'">
        Color Sample</div>
        
        <button [disabled]="true">Disabled</button> 
        
        <input [required]="true" value="Hello World !">
                
        `
})
export class App {


}




bootstrap(App);

