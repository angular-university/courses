
import {RouterConfig } from '@angular/router';
import {AllLessons} from "./all-lessons.component";
import {Stats} from "./stats.component";


export const routes: RouterConfig = [
    { path: 'stats', component: Stats },
    { path: 'all-lessons', component: AllLessons },
];
