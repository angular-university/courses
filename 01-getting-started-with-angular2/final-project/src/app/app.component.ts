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
    course$:FirebaseObjectObservable<any>;


    constructor(private af:AngularFire) {

        this.courses$ = af.database.list('courses');
        this.courses$.subscribe(console.log);

        this.course$ = af.database.object('courses/-KSH8w9CsbBMvt0uxxM_');
        this.course$.subscribe(console.log);
    }


    listPush() {
        this.courses$.push({description: 'TEST'});
    }


    listRemove() {

    }

    listSet() {

    }




}
