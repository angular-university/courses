
import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {xhrHeaders} from "./xhr-headers";
import {Lesson} from "./lesson";
import {Observable} from "rxjs/Observable";


@Injectable()
export class LessonsService {
    
    
    constructor(private http: Http) {

    }

    loadLessons(search = ""): Observable<Lesson[]> {

        console.log(`searching for ${search}`);

        let params: URLSearchParams = new URLSearchParams();
        params.set('search', search);

        return this.http.get('/lessons', {search:params}).map(res => res.json());
    }


    loadFlakyLessons() {
        return this.http.get('/flakylessons').map(res => res.json());
    }

    loadDelayedLessons(search = "") {

        console.log(`searching for ${search}`);

        let params: URLSearchParams = new URLSearchParams();
        params.set('search', search);

        return this.http.get('/delayedlessons', {search:params}).map(res => res.json());        
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