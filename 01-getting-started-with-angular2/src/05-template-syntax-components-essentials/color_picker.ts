

import {Component, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'color-picker',
    template: `

    <div class="color-picker">
        <div class="color-sample color-sample-blue" (click)="choose('#b13138')"></div>
        <div class="color-sample color-sample-red" (click)="choose('#1976d2')"></div>                
    </div>

    `
})
export class ColorPicker {

    @Output()
    color = new EventEmitter();

    choose(color) {
        this.color.emit(color);
    }

    reset() {
        this.color.emit("black");
    }

}