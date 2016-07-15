
import {RouterConfig } from '@angular/router';
import {AllLessons} from "./all-lessons.component";
import {Stats} from "./stats.component";


export const routes: RouterConfig = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lessons'
    },
    {
        path: 'lessons',
        component: AllLessons
    }
];
