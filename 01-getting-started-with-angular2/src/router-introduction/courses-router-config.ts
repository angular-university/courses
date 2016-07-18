

import {RouterConfig} from "@angular/router";
import {CourseDetail} from "./course-detail.component";
import {Courses} from "./courses.component";


export const coursesRouterConfig: RouterConfig = [
    {
        path: 'courses',
        children: [
            {
                path: '',
                component: Courses
            },
            {
                path: ':id',
                component: CourseDetail
            }
        ]
    }
];