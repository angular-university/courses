

import {Lesson} from "./lesson";
import {Observable} from "rxjs/Rx";




export class Course {

  constructor(
    public $key:string,
    public url:string,
    public description:string,
    public iconUrl: string,
    public courseListIcon:string,
    public longDescription: string,
    public lessons$: Observable<Lesson[]>) {


  }


  static fromJson({$key, url, description, iconUrl, courseListIcon, longDescription},
    lessons$: Observable<Lesson[]>) {
    return new Course($key, url, description, iconUrl, courseListIcon, longDescription, lessons$);
  }


}


