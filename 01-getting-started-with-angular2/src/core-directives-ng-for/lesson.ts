
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


@Component({ 
    selector: 'app',
    template: `
            
            <ul *ngFor="let hero of heroes">
                <li>{{hero}}</li>
            </ul>


        `
})
export class App {

    heroes = [
        'Superman',
        'Batman',
        'Robin',
        'Spiderman',
        'Wonder Woman'
    ];

}



bootstrap(App);

