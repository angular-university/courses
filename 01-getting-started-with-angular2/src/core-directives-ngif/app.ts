
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";



@Component({ 
    selector: 'app',
    template: `

            <div class="toggle-panel" *ngIf="show" 
                [hidden]="hidden" [style.visibility]="visibility">Toggle Me</div>

            
            <button (click)="toggleShow()">Show</button>
            <button (click)="toggleHidden()">Hidden</button>
            <button (click)="toggleVisible()">Visible</button>
            

        `
})
export class App {

    show = true;
    hidden = false;
    visibility = 'visible';

    toggleShow() {
        this.show = !this.show;
    }

    toggleHidden() {
        this.hidden = !this.hidden;
    }

    toggleVisible() {
        this.visibility = this.visibility == 'visible' ? 'hidden' : 'visible';
    }

}

@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

