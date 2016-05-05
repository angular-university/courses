

import {Directive, HostListener, Input} from "@angular/core";
import {ShowOneContainer} from "./show-one-container";


@Directive({
    selector: '[showOneTrigger]'
})
export class ShowOneTrigger {


    @Input('showOneTrigger')
    id:string;

    constructor(private showOneContainer: ShowOneContainer) {
        console.log('crreate trigger...');
    }


    @HostListener('click')
    click() {
        console.log("Clicked ..." + this.id);
        //this.showOneContainer.
    }

    
}