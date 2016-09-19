


import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {firebaseConfig} from "../../../environments/firebase.config";


@Injectable()
export class LessonsRestService {

  constructor(private http:Http) {

  }

  deleteLesson(lessonId:string): Observable<any> {

   const root = firebaseConfig.databaseURL;

    const headers = new Headers();
    headers.append('Content-Type', 'text/plain; charset=utf-8');

    return this.http.delete(`${root}/lessons/${lessonId}.json`);
  }


}
