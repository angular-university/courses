
import {Directive, Input} from "@angular/core";

@Directive({
    selector:'[obs-ref]',
    exportAs: 'obsRef'
})
export class ObservableReference {

    @Input("obs")
    val;
    
}