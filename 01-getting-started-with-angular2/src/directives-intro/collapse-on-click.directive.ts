
import {Directive, HostBinding, HostListener, Input, Output, EventEmitter,Optional} from "@angular/core";

@Directive({
    selector: '[collapse-on-click]',
    exportAs: "cp"
}) 
export class CollapseOnClick {

    @Input("collapsed")
    isCollapsed = false;

    @Output("collapsed")
    collapsedOutput = new EventEmitter();

    get collapsed() {
        return this.isCollapsed;
    }

    @HostListener('dblclick') 
    onDblClick() {
        this.isCollapsed = !this.isCollapsed;
        this.collapsedOutput.emit(this.isCollapsed);
    }

}