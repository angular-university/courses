

import {NgModule} from "@angular/core";
import {LessonsList} from "./lessons-list.component";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [LessonsList],
    exports: [LessonsList],
    imports: [CommonModule]

})
export class SharedModule {

}