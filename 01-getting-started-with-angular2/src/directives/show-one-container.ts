

import {Directive, ContentChildren, QueryList, AfterContentInit} from "@angular/core";
import {ShowOne} from "./show-one";
import {ShowOneTrigger} from "./show-one-trigger";


@Directive({
    selector: '[showOneContainer]'
})
export class ShowOneContainer implements AfterContentInit {

    triggers: ShowOneTrigger[] = [];

    @ContentChildren(ShowOne)
    items: QueryList<ShowOne>;

    ngAfterContentInit() {
        this.items.first.active = true;
    }

    add(trigger: ShowOneTrigger) {
        trigger.active = this.triggers.length == 0;
        this.triggers.push(trigger);
    }

    show(id: string) {
        this.items.forEach(item => {
            item.active = item.id == id;
        });
        this.triggers.forEach(trigger => {
            trigger.active = trigger.id == id;
        });
    }

}