

import {Directive, ContentChildren, QueryList} from "@angular/core";
import {ShowOne} from "./show-one";


@Directive({
    selector: '[showOneContainer]'
})
export class ShowOneContainer {

    @ContentChildren(ShowOne)
    items: QueryList<ShowOne>;

    show(id: string) {
        this.items.forEach(item => {
            item.active = item.id == id;
        });
    }

}