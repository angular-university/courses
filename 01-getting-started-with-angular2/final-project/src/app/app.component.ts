import {Component} from "@angular/core";

declare const firebase;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Final Project ongoing !';


  constructor() {

    firebase.database().ref().on('value', (snap) => {
      console.log(snap.val());
    });

  }

}
