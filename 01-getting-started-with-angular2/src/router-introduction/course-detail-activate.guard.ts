import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, Subject} from "rxjs/Rx";
import {coursesData} from "./coursesData";


export class CanCourseDetailActivate implements CanActivate {


    canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot):Observable<boolean>|boolean {


        const subject = new Subject<boolean>();

        setTimeout(() => {

            const index = route.params['id'] - 1;

            const course = coursesData.courses[index];

            subject.next(course ? !course.pro : true);
            subject.complete();

        });

        return subject;

    }


}