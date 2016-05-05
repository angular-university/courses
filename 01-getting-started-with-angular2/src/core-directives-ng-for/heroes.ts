
import {Component} from "@angular/core";


const HEROES = [
    {id: 1, name:'Superman'},
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 5, name:'Wonder Woman'}
];

@Component({
    selector:'heroes',
    template: `
            <table>
                <tr *ngFor="let hero of heroes; let i = index; let isEven = even; 
                                let isOdd = odd;let isFirst = first; let isLast=last;trackBy:hero?.id">
                    <td>{{i}}</td>
                    <td>{{hero.name}}</td> 
                    <td>{{isEven}}</td>
                    <td>{{isOdd}}</td>
                    <td>{{isFirst}}</td>
                    <td>{{isLast}}</td>
                </tr>
            </table>
`
})
export class Heroes {

     heroes = HEROES;

    //@ContentChildren(Hero)
    //heroes: QueryList<Hero>;
    
}