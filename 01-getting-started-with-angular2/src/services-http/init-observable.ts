
import {Observable} from "rxjs/Observable";
declare function fetch(url:string);




export function initObservable() {

    const click$ = Observable.fromEvent(document,'click');

    const mouse$ = Observable.fromEvent(document,'mousemove')
        .filter((move:MouseEvent) => move.clientY >=200);


    const combined$ = Observable.combineLatest(mouse$, click$);
/*
    combined$.subscribe(
        combined => console.log(combined[0])
    );

    */
}

/*
*      // mouse clicks
*
*      |------------------------x---------------------x-------....
*
*
*      // mouse move
*
*      |--(x,y)--(x,y)--(x,y)--(x,y)--(x,y)-(x,y)-(x,y)-(x,y)-(x,y)....
*
*
*      // mouse move bellow 200
*
*      |----------------(x,y)---------(x,y)----...
*
*
*      // combined
*
*      |-------------------------(x,y)---.....
*
*
* */



