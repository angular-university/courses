
import {RouterConfig} from "@angular/router";
import {AllLessons} from "./all-lessons.component";
import {Home} from "./home.component";
import {Courses} from "./courses.component";


export const routes: RouterConfig = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'courses',
        component: Courses
    },
    {
        path: 'lessons',
        component: AllLessons
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
];
