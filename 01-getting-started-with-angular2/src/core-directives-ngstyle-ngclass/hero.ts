
import {Directive, Input} from "@angular/core";


@Directive({
    selector: 'hero',
})
export class Hero {

    @Input()
    id: number;

    @Input()
    name:string;

    @Input()
    marvel = false;
    
}