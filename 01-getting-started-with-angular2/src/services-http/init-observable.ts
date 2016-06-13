
import {Observable} from "rxjs/Observable";
declare function fetch(url:string);




export function initObservable() {

    const mouse$ = Observable.fromEvent(document, 'mousemove')
                    .filter((move: MouseEvent) => move.clientY >= 200);

/*
    mouse$.subscribe(
        (move: MouseEvent) => console.log(move)
    );
*/

    const click$ = Observable.fromEvent(document, 'click');

/*
    click$.subscribe(
        () => console.log("mouse clicked ")
    );
*/


    const filteredClicks$ =  Observable.combineLatest(mouse$, click$);

    filteredClicks$.subscribe(
        value => console.log(value[0])
    );

}


/*
*     // mouse move
*
*     |------(x,Y)----(x,y)------(x,y)
*
*     // mouse move bellow 200
*
*     |--------------------------(x,y)------...
*
*
*     // mouse click
*
*     |------------------------------------x-----------
*
*
*     // filteredClicks$
*
*     |----------------------------[(x,y),click]-------
*
*
* */



