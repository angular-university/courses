

import {CourseDetail} from "./course-detail.component";
import {Courses} from "./courses.component";
import {CanCourseDetailDeactivate} from "./course-detail-deactivate.guard";
import {CanCourseDetailActivate} from "./course-detail-activate.guard";
import {Playlist} from "./playlist.component";


export const coursesRouterConfig = [
    {
        path: 'courses',
        children: [
            {
                path: '',
                component: Courses
            },
            {
                path: 'legacy-list',
                redirectTo: '/lessons',
                pathMatch: 'full'
            },
            {
                path: ':id',
                canActivate: [CanCourseDetailActivate],
                canDeactivate: [CanCourseDetailDeactivate],
                component: CourseDetail
            }
        ]
    },
    {
        path: 'playlist',
        component: Playlist,
        outlet: 'playlist'
    }
];