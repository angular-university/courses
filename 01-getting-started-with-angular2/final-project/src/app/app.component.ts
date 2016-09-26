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

    firstCourse: any;


    constructor(private af:AngularFire) {

        this.courses$ = af.database.list('courses');
        this.courses$.subscribe(console.log);

        this.course$ = af.database.object('courses/-KSH8w9CsbBMvt0uxxM_');
        this.course$.subscribe(console.log);

        this.courses$
            .map(courses => courses[0])
            .subscribe(course => this.firstCourse = course);
    }


    listPush() {
        this.courses$.push({description: 'TEST'})
            .then(
                () => console.log('List Push Done'),
                console.error
            );
    }


    listRemove() {
        this.courses$.remove(this.firstCourse)
            .then(
                () => console.log('List Remove Done'),
                console.error
            );
    }


    listUpdate() {
        this.courses$.update(this.firstCourse, {description: 'Test'});
    }



    objUpdate() {


    }

    objSet() {


    }


}
