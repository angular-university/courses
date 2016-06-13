
import {Directive, Input} from "@angular/core";

@Directive({
    selector:'[obs-ref]',
    exportAs: 'obsVal'
})
export class ObservableReference {

    @Input("obs")
    val;
    
}