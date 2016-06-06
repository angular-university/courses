
import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
    selector: '[collapsible]'
}) 
export class Collapsible {

    isCollapsed = true;

    @HostBinding('class.collapsed')
    get collapsed() {
        return this.isCollapsed;
    }

    @HostListener('dblclick') 
    onDblClick(btn) {
        this.isCollapsed = !this.isCollapsed;
    }

}