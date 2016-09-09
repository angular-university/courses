import "./polyfills.ts";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {environment} from "./environments/environment";
import {AppModule} from "./app/";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
