import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app works!';

    courses$:FirebaseListObservable<any>;
    lesson$:FirebaseObjectObservable<any>;

    firstCourse: any;


    constructor(private af:AngularFire) {

        this.courses$ = af.database.list('courses');
        this.courses$.subscribe(console.log);

        this.lesson$ = af.database.object('lessons/-KSH8w9OnJMNzIGUW98c');
        this.lesson$.subscribe(console.log);

    }


    listPush() {

    }


    listRemove() {
    }


    listUpdate() {

    }



    objUpdate() {

    }

    objSet() {

    }


}
