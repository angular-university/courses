
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {SortPipe} from "./sort.pipe";


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
                <label>Slice Pipe: {{ message | slice:0:5 }}</label>
            </div>                       

            <div class="pipe-example">
                <label>Date Pipe: {{ date | date:'yyyy-MMM-dd' }}</label>
            </div>

            <div class="pipe-example">
                <label>Number Formatting: {{ pi | number:'5.1-2' }}</label>
            </div>            

            <div class="pipe-example">
                <label>Percent Pipe: {{ percentage | percent:'2.1-2' }}</label>
            </div>                  

            <div class="pipe-example">
                <label>Currency Pipe: {{ amount | currency:'USD':true:'2.1-2' }}</label>
            </div>
                            
            <div class="pipe-example">
                <label>Custom Pipe: {{ data | sort:'DESC'}}</label>
            </div>                              
            
        `
})
export class App {


    message = 'Hello World !';

    date = new Date();

    pi = 3.14159265359;

    percentage = 0.0234;

    amount = 12.1234;

    data = ['A', 'B', 'H', 'C'];

}

@NgModule({
    declarations: [App, SortPipe],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

