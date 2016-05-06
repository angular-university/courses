

import {Directive, HostListener, HostBinding, Input} from "@angular/core";
import {ShowOneContainer} from "./show-one-container";


@Directive({
    selector: '[showOneTrigger]'
})
export class ShowOneTrigger { 

    @Input("showOneTrigger")
    id: string;

    @Input()
    active = false;
    
    constructor(private showOneContainer: ShowOneContainer) {
        showOneContainer.add(this);
    }

    @HostListener('click')
    click() {
        this.showOneContainer.show(this.id);
    }

    @HostBinding('class.selected')
    get selected() {
        return this.active;
    }
    
}