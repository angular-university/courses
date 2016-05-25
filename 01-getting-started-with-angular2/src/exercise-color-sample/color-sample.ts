

import {Component, Input} from "@angular/core";

@Component({
    selector:'color-sample',
    template: `<div class="color-sample"
            [style.background]="color"></div>`
})
export class ColorSample {

    @Input()
    color:string;

}