
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


@Component({ 
    selector: 'app',
    template: `

            <div class="pipe-example">
                <label>Uppercase Pipe: {{ message | uppercase }}</label>
            </div>
            
            <div class="pipe-example">
                <label>Lowercase Pipe: {{ message | lowercase }}</label>
            </div>            

            <div class="pipe-example">
                <label>Lowercase Pipe: {{ message }}</label>
            </div>            


        `
})
export class App {


    message = 'Hello World !';


}

bootstrap(App);

