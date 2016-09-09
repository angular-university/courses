

import {Lesson} from "./lesson";
import {Observable} from "rxjs/Rx";




export class Course {

  constructor(
    public url:string,
    public description:string,
    public iconUrl: string,
    public courseListIcon:string,
    public longDescription: string,
    public lessons: Observable<Lesson>) {


  }


  static fromJson(
      {url, description, iconUrl, courseListIcon, longDescription},
    lessons: Observable<Lesson>) {
    return new Course(url, description, iconUrl, courseListIcon, longDescription, lessons);
  }


}


