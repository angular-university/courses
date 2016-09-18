

import {Route} from "@angular/router";
import {CoursesComponent} from "./app/courses/courses.component";
import {HomeComponent} from "./app/home/home.component";
import {CourseDetailComponent} from "./app/course-detail/course-detail.component";
import {LessonComponent} from "./app/lesson/lesson.component";
import {LessonFormComponent} from "./app/lesson-form/lesson-form.component";
import {NewLessonComponent} from "./app/new-lesson/new-lesson.component";
import {EditLessonComponent} from "./app/edit-lesson/edit-lesson.component";


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
                    path: '',
                    component: LessonComponent
                  },
                  {
                    path: 'edit',
                    component: EditLessonComponent
                  }
                ]
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
  }
];
