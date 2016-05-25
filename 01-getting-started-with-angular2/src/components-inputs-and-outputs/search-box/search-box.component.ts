
import {Component, Input, EventEmitter, Output} from "@angular/core";


declare const module;

console.log(module);


@Component({
    selector: 'search-box',
    moduleId: module.id,
    templateUrl: 'search-box.component.html'
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