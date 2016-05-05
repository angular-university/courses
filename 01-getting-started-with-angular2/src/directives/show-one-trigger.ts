

import {Directive, HostListener, HostBinding, Input} from "@angular/core";
import {ShowOneContainer} from "./show-one-container";


@Directive({
    selector: '[showOneTrigger]'
})
export class ShowOneTrigger {

    @Input('showOneTrigger')
    id:string;

    active = false;

    constructor(private showOneContainer: ShowOneContainer) {
        showOneContainer.triggers.push(this);
    }

    @HostBinding('class.selected')
    get selected() {
        return this.active;
    }


    @HostListener('click')
    click() {
        this.showOneContainer.show(this.id);
    }

    
}