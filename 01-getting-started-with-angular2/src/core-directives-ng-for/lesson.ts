
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


@Component({ 
    selector: 'app',
    template: `

            <table>
                <tr *ngFor="let hero of heroes; let i = index; let isEven = even; let isOdd = odd;let isFirst = first; let isLast=last">
                    <td>{{i}}</td>
                    <td>{{hero}}</td>
                    <td>{{isEven}}</td>
                    <td>{{isOdd}}</td>
                    <td>{{isFirst}}</td>
                    <td>{{isLast}}</td>
                </tr>
            </table>

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

