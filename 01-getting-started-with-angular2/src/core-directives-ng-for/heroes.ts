
import {Component} from "@angular/core";


const HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];

@Component({
    selector:'heroes',
    template: `
            <table>
                <thead>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Even</th>
                    <th>Odd</th>
                    
                </thead>
                <tr *ngFor="let hero of heroes; let i = index; let isEven = even; 
                                let isOdd = odd;let isFirst = first; let isLast=last;trackBy:hero?.id">
                    <td>{{i}}</td>
                    <td>{{hero.name}}</td> 
                    <td>{{isEven}}</td>
                    <td>{{isOdd}}</td>
                </tr>
            </table>
`
})
export class Heroes {

     heroes = HEROES;

    //@ContentChildren(Hero)
    //heroes: QueryList<Hero>;
    
}