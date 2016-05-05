

import {Directive, HostListener, Input} from "@angular/core";
import {ShowOneContainer} from "./show-one-container";


@Directive({
    selector: '[showOneTrigger]'
})
export class ShowOneTrigger {


    @Input('showOneTrigger')
    id:string;

    constructor(private showOneContainer: ShowOneContainer) {

    }


    @HostListener('click')
    click() {
        this.showOneContainer.show(this.id);
    }

    
}