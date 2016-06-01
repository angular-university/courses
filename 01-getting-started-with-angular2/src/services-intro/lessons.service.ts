
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {lessonsData} from "./lessons"; 


@Injectable()
export class LessonsService {

    lessons = [];
    
    constructor(http: Http) {
        http.get('/lessons')
            .map(res => res.json())
            .subscribe(
                lessons => this.lessons = lessons,
                console.error
            );
    }
}