

import {Component, Output, EventEmitter, Input} from "angular2/core";
import {BLUE, RED} from "./constants";

@Component({
    selector: 'color-picker',
    template: `
    
    <div style="color: {{color}}">Pick a Color:</div>
    
    <div class="color-picker">
        <div class="color-sample color-sample-blue" (click)="choose('${BLUE}')"></div>  
        <div class="color-sample color-sample-red" (click)="choose('${RED}')"></div>                
    </div>

    `
})
export class ColorPicker {

    @Input()
    color: string;

    @Output("color")
    colorOutput = new EventEmitter();

    choose(color) {
        this.color = color;
        this.colorOutput.emit(color);
    }

    reset() {
        this.colorOutput.emit("black");
    }

}