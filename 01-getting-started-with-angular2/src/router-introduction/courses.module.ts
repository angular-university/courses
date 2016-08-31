

import {NgModule} from "@angular/core";
import {CoursesList} from "./courses-list.component";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [CommonModule],
    declarations: [CoursesList],
    exports: [CoursesList]
})
export class CoursesModule {

}