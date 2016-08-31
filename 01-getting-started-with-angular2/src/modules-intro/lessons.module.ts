


import {NgModule} from "@angular/core";
import {LessonsList} from "./lessons-list.component";
import {LessonsService} from "./lessons.service";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [LessonsList],
    exports: [LessonsList],
    providers: [LessonsService]
})
export class LessonsModule {

}