
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

import {ColorPicker} from "./color_picker";
import {ColorPreviewer} from "./color_previewer";


@Component({ 
    selector: 'app',
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



@NgModule({
    declarations: [App, ColorPreviewer, ColorPicker],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

