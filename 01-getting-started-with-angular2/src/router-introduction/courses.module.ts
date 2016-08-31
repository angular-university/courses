

import {NgModule} from "@angular/core";
import {CoursesList} from "./courses-list.component";
import {CommonModule} from "@angular/common";
import {Courses} from "./courses.component";
import {CourseDetail} from "./course-detail.component";
import {CanCourseDetailDeactivate} from "./course-detail-deactivate.guard";
import {CanCourseDetailActivate} from "./course-detail-activate.guard";
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared.module";


const routerConfig = [
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
];


@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routerConfig), SharedModule],
    declarations: [Courses, CoursesList, CourseDetail],
    exports: [CoursesList],
    providers: [CanCourseDetailDeactivate, CanCourseDetailActivate]
})
export default class CoursesModule {

}