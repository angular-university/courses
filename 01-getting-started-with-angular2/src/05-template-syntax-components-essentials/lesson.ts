
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";


@Component({
    selector: 'app',
    template: `

            <div>Pick a Color:</div>

            <div class="color-picker">
                <div class="color-sample color-sample-red"></div>
                <div class="color-sample color-sample-blue"></div>
            </div>

            <div>Preview Text Color</div>

            <button>Reset</button>

        `
})
export class App {



}



bootstrap(App);

