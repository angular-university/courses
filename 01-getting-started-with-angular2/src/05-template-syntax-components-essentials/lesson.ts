
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {ColorPicker} from "./color_picker";
import {ColorPreviewer} from "./color_previewer";


@Component({ 
    selector: 'app',
    directives: [ColorPreviewer, ColorPicker],
    template: `

            <div>Pick a Color:</div>
            
            <color-picker #picker (color)="previewer.color = $event">
            </color-picker>
            
            <color-previewer #previewer></color-previewer>

            <button (click)="picker.reset()">Reset</button>

        `
})
export class App {



}



bootstrap(App);

