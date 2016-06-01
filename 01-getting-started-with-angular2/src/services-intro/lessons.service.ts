
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {lessonsData} from "./lessons";
import {xhrHeaders} from "./xhr-headers";


@Injectable()
export class LessonsService {

    lessons = [];
    
    constructor(private http: Http) {
        this.loadLessons();
    }

    loadLessons() {
        this.http.get('/lessons')
            .map(res => res.json())
            .subscribe(
                lessons => this.lessons = lessons,
                console.error
            );
    }

    saveLesson(description) {
        this.http.post('/lessons', JSON.stringify({description}), xhrHeaders())
            .map(res => res.json());

    }
    
}