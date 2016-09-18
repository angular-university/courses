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
import {firebaseConfig, authConfig} from "../environments/firebase.config";
import { LessonComponent } from './lesson/lesson.component';
import {LessonsService} from "./lessons.service";
import {SafePipe} from "./shared/safe.pipe";
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import {LessonResolver} from "./shared/resolvers/lesson.resolver";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from "./auth.service";



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MenuComponent,
    CourseDetailComponent,
    HomeComponent,
    LessonComponent,
    SafePipe,
    LessonFormComponent,
    NewLessonComponent,
    EditLessonComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule
  ],
  providers: [LessonResolver, CoursesService, LessonsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
