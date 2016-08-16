
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";



@Component({
    selector: 'app',
    template: `
 
        <div class="color-sample" [style.background]="'red'">
        Color Sample</div>
        
        <button [disabled]="true">Disabled</button> 
        
        <input [required]="true" value="Hello World !">
                
        `
})
export class App {


}




@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


