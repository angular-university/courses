
import {Component, Input} from "@angular/core";

@Component({
    selector: 'search-box',
    template: `<input placeholder="{{text}}"><button>Clear</button>`
})
export class SearchBox {

    @Input()
    text:string;
    
}