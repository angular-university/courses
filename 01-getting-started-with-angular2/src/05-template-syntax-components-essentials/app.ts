
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ColorPicker} from "./color_picker";
import {ColorPreviewer} from "./color_previewer";


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

    color:string;


}



bootstrap(App);

