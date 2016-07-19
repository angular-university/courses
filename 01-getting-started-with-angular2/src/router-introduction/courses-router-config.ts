

import {RouterConfig} from "@angular/router";
import {CourseDetail} from "./course-detail.component";
import {Courses} from "./courses.component";
import {CanCourseDetailDeactivate} from "./course-detail-deactivate.guard";
import {CanCourseDetailActivate} from "./course-detail-activate.guard";


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
                canActivate: [CanCourseDetailActivate],
                canDeactivate: [CanCourseDetailDeactivate]
            }
        ]
    }
];