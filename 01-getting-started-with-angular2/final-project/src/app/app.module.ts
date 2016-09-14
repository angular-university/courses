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
import { LessonComponent } from './lesson/lesson.component';
import {LessonsService} from "./lessons.service";
import {SafePipe} from "./shared/safe.pipe";
import { LessonFormComponent } from './lesson-form/lesson-form.component';




@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MenuComponent,
    CourseDetailComponent,
    HomeComponent,
    LessonComponent,
    SafePipe,
    LessonFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [CoursesService, LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
