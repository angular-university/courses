
import {Component, Input} from "angular2/core";

@Component({
    selector: 'color-previewer',
    template: `
                <div class="color-previewer" 
                    style="color:{{color}}">
                    Preview Text Color
                </div>
            `
})
export class ColorPreviewer {

    @Input()
    color: string;
    
}