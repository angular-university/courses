

import {Route} from "@angular/router";
import {CoursesComponent} from "./app/courses/courses.component";
import {HomeComponent} from "./app/home/home.component";
import {CourseDetailComponent} from "./app/course-detail/course-detail.component";
import {LessonComponent} from "./app/lesson/lesson.component";
import {LessonFormComponent} from "./app/lesson-form/lesson-form.component";
import {NewLessonComponent} from "./app/new-lesson/new-lesson.component";
import {EditLessonComponent} from "./app/edit-lesson/edit-lesson.component";
import {LessonResolver} from "./app/shared/resolvers/lesson.resolver";
import {LoginComponent} from "./app/login/login.component";
import {RegisterComponent} from "./app/register/register.component";


export const routerConfig: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courses',
    children: [
      {
        path: '',
        component: CoursesComponent,
      },
      {
        path: ':id',
        children: [
          {
            path: 'new',
            component: NewLessonComponent
          },
          {
            path: '',
            children: [
              {
                path: '',
                component: CourseDetailComponent
              },
              {
                path: ':id',
                children: [
                  {
                    path: 'edit',
                    component: EditLessonComponent,
                    resolve: {
                      lesson: LessonResolver
                    }
                  },
                  {
                    path: '',
                    component: LessonComponent
                  }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'lessons/:id',
    component: LessonComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
