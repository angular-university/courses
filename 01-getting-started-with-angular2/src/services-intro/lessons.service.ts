
import {Injectable} from "@angular/core";
import {lessonsData} from "./lessons";


@Injectable()
export class LessonsService {

    lessons = lessonsData;
}