import {Component} from "@angular/core";
import {AngularFire} from "angularfire2";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Final Project ongoing !';


  constructor(af: AngularFire) {

    const data = af.database.object('/courses');

    data.subscribe( val => console.log(val) );

  }

}
