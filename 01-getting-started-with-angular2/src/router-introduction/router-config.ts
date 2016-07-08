
import {RouterConfig } from '@angular/router';
import {AllLessons} from "./all-lessons.component";
import {Stats} from "./stats.component";


export const routes: RouterConfig = [
    {
        path: '',
        component: AllLessons
    },
    {
        path: 'stats',
        component: Stats
    }
];
