



import {Directive, HostBinding, Input} from "@angular/core";


@Directive({
    selector: '[showOne]'
})
export class ShowOne {

    @Input('showOne')
    id:string;

    active = false;

    @HostBinding('hidden')
    get hidden() {
        return !this.active;
    }
    
}