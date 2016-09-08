

import {Route} from "@angular/router";
import {CoursesComponent} from "./app/courses/courses.component";


export const routerConfig: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/courses'
  },
  {
    path: 'courses',
    component: CoursesComponent
  }
];
