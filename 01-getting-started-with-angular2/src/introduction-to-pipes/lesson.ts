
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


const HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 3, name:'Iron Man'}
];


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
                <label>Replace Pipe: {{ message | replace:'World':'Angular 2 World' }}</label>
            </div>            

            <div class="pipe-example">
                <label>Date Pipe: {{ date | date:'yyyy-MMM-dd' }}</label>
            </div>
            
        `
})
export class App {


    message = 'Hello World !';

    date = new Date();


}

bootstrap(App);


/*

    import {DatePipe} from './date_pipe';
    import {DecimalPipe, PercentPipe, CurrencyPipe} from './number_pipe';

    

 */