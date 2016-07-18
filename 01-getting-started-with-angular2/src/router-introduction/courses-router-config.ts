

import {RouterConfig} from "@angular/router";
import {CourseDetail} from "./course-detail.component";
import {Courses} from "./courses.component";
import {CanCourseDetailDeactivate} from "./course-detail-deactivate.guard";


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
                component: CourseDetail,
                canDeactivate: [CanCourseDetailDeactivate]
            }
        ]
    }
];