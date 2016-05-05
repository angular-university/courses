

import {Directive, ContentChildren, QueryList} from "@angular/core";
import {ShowOne} from "./show-one";
import {ShowOneTrigger} from "./show-one-trigger";


@Directive({
    selector: '[showOneContainer]'
})
export class ShowOneContainer {

    triggers: ShowOneTrigger[] = [];

    @ContentChildren(ShowOne)
    items: QueryList<ShowOne>;

    show(id: string) {
        this.items.forEach(item => {
            item.active = item.id == id;
        });
        this.triggers.forEach(trigger => {
            trigger.active = trigger.id == id;
        });
    }

}