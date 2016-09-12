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
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import {firebaseConfig} from "../environments/firebase.config";




@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MenuComponent,
    CourseDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
