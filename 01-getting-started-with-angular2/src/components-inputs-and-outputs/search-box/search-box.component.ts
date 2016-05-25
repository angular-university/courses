
import {Component, Input, EventEmitter, Output} from "@angular/core";


declare const module;

console.log(module);


@Component({
    selector: 'search-box',
    template: `<input placeholder="{{text}}" #box
       (keydown.enter)="onSearch(box.value)">

        <button class="btn-clear" (click)="clear(box)">Clear</button>`
})
export class SearchBox {

    @Input()
    text:string;

    @Output()
    search = new EventEmitter();


    clear(box) {
        box.value = '';
    }

    onSearch(searchText) {
        this.search.emit(searchText);
    }

}