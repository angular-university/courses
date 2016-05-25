
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";


@Component({
    selector:'app',
    template: `<div class="color-sample" style="color:red"></div>
                <input placeholder="Type Your Color Here">`
})
export class App {

}

bootstrap(App);