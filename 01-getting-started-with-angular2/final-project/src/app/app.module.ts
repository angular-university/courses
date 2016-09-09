import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AngularFireModule} from "angularfire2";
import {CoursesComponent} from "./courses/courses.component";
import {RouterModule} from "@angular/router";
import {routerConfig} from "../router.config";
import {CoursesService} from "./courses.service";
import { MenuComponent } from './menu/menu.component';

var config = {
  apiKey: "AIzaSyBhuIkN2d6xNe7DwxzjCRhBIWiu1-mJ9vo",
  authDomain: "final-project-ac645.firebaseapp.com",
  databaseURL: "https://final-project-ac645.firebaseio.com",
  storageBucket: "final-project-ac645.appspot.com",
};


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
