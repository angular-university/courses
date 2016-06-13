
import {Observable} from "rxjs/Observable";
declare function fetch(url:string);




export function initObservable() {

    const lessonsPromise = fetch('/lessons').then(res => res.json());

    const lessons$ = Observable.fromPromise(lessonsPromise);


    lessons$.subscribe(
        lessons => console.log("new lessons:",lessons),

        error => console.error("error retrieving lessons!",error),

        () => console.log("completed!")
    );

}

