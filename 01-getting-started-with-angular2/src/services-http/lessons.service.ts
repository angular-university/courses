
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {xhrHeaders} from "./xhr-headers";
import {Lesson} from "./lesson";
import {Observable} from "rxjs/Observable";


@Injectable()
export class LessonsService {
    
    
    constructor(private http: Http) {

    }

    loadLessons(): Observable<Lesson[]> {
        return this.http.get('/lessons').map(res => res.json());
    }

    loadFlakyLessons() {
        return this.http.get('/flakylessons').map(res => res.json());
    }


    createLesson(description) {

        const network$ = this.http.post('/lessons',
            JSON.stringify({description}),
            xhrHeaders())
            .cache();

        network$.subscribe(
            () => console.log('HTTP post successful !'),
            err => console.error(err),
            () => console.log('monitoring completed ...')

        );

        return network$;

    }

    delete(lessonId) {
        return this.http.delete(`/lessons/${lessonId}`, xhrHeaders());
    }

    
}