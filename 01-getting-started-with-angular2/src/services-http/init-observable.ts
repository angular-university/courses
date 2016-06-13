
import {Observable} from "rxjs/Observable";
declare function fetch(url:string);




export function initObservable() {

    var keys$ = Observable.fromEvent(document, 'keyup')
                    .do((keyUp:KeyboardEvent) => console.log(keyUp.key));

    keys$.subscribe();


    fetch('/lessons')
        .then(res => res.json())
        .then(lessons => console.log(lessons));

}

