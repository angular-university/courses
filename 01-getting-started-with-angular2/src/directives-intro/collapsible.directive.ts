
import {Directive, HostBinding, HostListener, Input} from "@angular/core";

@Directive({
    selector: '[collapsible]'
}) 
export class Collapsible {

    @Input("collapsed")
    isCollapsed = false;

    @HostBinding('class.collapsed')
    get collapsed() {
        return this.isCollapsed;
    }

    @HostListener('dblclick')
    onDblClick(btn) {
        this.isCollapsed = !this.isCollapsed;
    }

}