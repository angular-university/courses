

import {Directive, ContentChildren, QueryList} from "@angular/core";
import {ShowOne} from "./show-one";


@Directive({
    selector: '[showOneContainer]'
})
export class ShowOneContainer {

    @ContentChildren(ShowOne)
    items: QueryList<ShowOne>;

    show(active: ShowOne) {
        console.log(this.items.length);
    }

}