

import {Course} from "./course";
import {Observable} from "rxjs/Rx";

export class Lesson {


  constructor(
    public $key:string,
    public description: string,
    public duration: string,
    public url: string,
    public tags: string,
    public pro: boolean,
    public longDescription: string) {

  }


  static fromJson({$key, description, duration, url,tags,pro,longDescription}) {
    return new Lesson($key, description, duration, url,tags,pro,longDescription);
  }


}
