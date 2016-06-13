
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {xhrHeaders} from "./xhr-headers";


@Injectable()
export class LessonsService {
    
    
    constructor(private http: Http) {
        this.loadLessons();
    }

    loadLessons() {
        return this.http.get('/lessons')
            .map(res => res.json());
    }

    createLesson(description) {
        console.log("creating lesson ...");
        const lesson = {description};
        return this.http.post('/lessons', JSON.stringify(lesson), xhrHeaders());
    }

    delete(lessonId) {
        return this.http.delete(`/lessons/${lessonId}`, xhrHeaders());
    }
    
}