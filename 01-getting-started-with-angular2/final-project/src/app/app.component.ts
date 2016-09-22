import { Component } from '@angular/core';

import {initializeApp, database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  constructor() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA0BcUcu4V8aHT_gM-32BhRcmqji4z-lts",
      authDomain: "final-project-recording.firebaseapp.com",
      databaseURL: "https://final-project-recording.firebaseio.com",
      storageBucket: "final-project-recording.appspot.com",
      messagingSenderId: "290354329688"
    };

    initializeApp(config);

    var root = database().ref();

    root.on('value', function(snap) {

      console.log(snap.val());

    });

  }

}
