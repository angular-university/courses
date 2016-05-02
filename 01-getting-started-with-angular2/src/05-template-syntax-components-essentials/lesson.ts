
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {ColorPicker} from "./color_picker";
import {ColorPreviewer} from "./color_previewer";
import {BLUE} from "./constants";


@Component({ 
    selector: 'app',
    directives: [ColorPreviewer, ColorPicker], 
    template: `

            <color-picker #picker [color]="color" (color)="color = $event">
            </color-picker>
            
            <color-previewer #previewer [color]="color"></color-previewer>

            <button (click)="picker.reset()">Reset</button>

        `
})
export class App {
    
    color = BLUE;

}



bootstrap(App);

