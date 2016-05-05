
import {Component, ContentChildren, QueryList} from "@angular/core";
import {Hero} from "./hero";


@Component({
    selector:'heroes',
    template: `
    <table>
        <thead>
            <th>Name</th>
            <th>Index</th>
        </thead>
        <tbody>
            <tr *ngFor="let hero of heroes; let i = index">
                <td>{{hero.name}}</td>
                <td>{{i}}</td>

            </tr>
        </tbody>
    </table>
`
})
export class Heroes {

     @ContentChildren(Hero)
     heroes: QueryList<Hero>;

}