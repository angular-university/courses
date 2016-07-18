


import {CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {CourseDetail} from "./course-detail.component";
import {Observable} from "rxjs/Rx";

export class CanCourseDetailDeactivate
    implements  CanDeactivate<CourseDetail> {


    canDeactivate(component:CourseDetail,
                  route:ActivatedRouteSnapshot,
                  state:RouterStateSnapshot):Observable<boolean>|boolean {


        if (!component.dirty) {
            return true;
        }

        return confirm("Unsaved changes exist, do you want to exit ?");
    }

}