
import {Component, ContentChildren, QueryList} from "@angular/core";
import {Hero} from "./hero";

export const BLUE = '#b13138';
export const RED = '#1976d2';


@Component({
    selector:'heroes',
    template: `
    <table>
        <thead>
            <th>Name</th>
            <th>Index</th>
        </thead>
        <tbody>
            <tr *ngFor="let hero of heroes; let i = index"
                    [ngClass]="classes(hero)">
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

    get styles() {
        return {
            color: 'blue',
            'text-decoration': 'underline'
        };
    }

    classes(hero: Hero) {
        return {
            marvel:hero.marvel,
            hulk: hero.name === 'Hulk'
        };
    }

}