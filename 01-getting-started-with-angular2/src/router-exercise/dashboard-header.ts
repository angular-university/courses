import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'dashboard',
    template: `

    <h1>Dashboard</h1>
    <p>click on a checkbox to include a section</p>  
          
    <div class="toggle-buttons">
        <input class="graph-toggle" type="checkbox"
            (click)="setGraphs(g1.checked, g2.checked, g3.checked)"  #g1>Graph 1
          
        <input class="graph-toggle" type="checkbox" 
            (click)="setGraphs(g1.checked, g2.checked, g3.checked)" #g2>Graph 2
        
        <input class="graph-toggle" type="checkbox" 
            (click)="setGraphs(g1.checked, g2.checked, g3.checked)" #g3>Graph 3
    </div>

`
})
export class DashboardHeader {


    constructor(private router: Router) {

    }

    setGraphs(g1, g2, g3) {
        console.log(g1, g2, g3);

        let sections = "";

        if (g1) {
            sections += "section1:section1";
        }

        if (g2) {
            if (sections) {
                sections += "//";
            }
            sections += "section2:section2";
        }

        if (g3) {
            if (sections) {
                sections += "//";
            }
            sections += "section3:section3";
        }
        let url = '/home';

        if (sections) {
            url += `(${sections})`;
        }

        console.log(url);
        this.router.navigateByUrl(url);

    }




}