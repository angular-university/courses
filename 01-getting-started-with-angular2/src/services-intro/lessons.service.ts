
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
                err => console.error(err)
            );
    }

    createLesson(description) {
        console.log("creating lesson ...");
        const lesson = {description};
        this.lessons.push(lesson);
        this.http.post('/lessons', JSON.stringify(lesson), xhrHeaders())
            .subscribe(
                () => {},
                err => console.error(err)
            );
    }

    delete(lesson) {
        console.log("deleting lesson ...");
        const index = this.lessons.find(item => item.url === lesson.url);
        this.lessons.splice(index, 1);
        this.http.delete('/lessons', xhrHeaders())
            .subscribe(
                () => {},
                err => console.error(err)
            );
    }
    
}