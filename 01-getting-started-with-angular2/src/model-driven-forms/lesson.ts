

export enum StudentLevel {
    BEGINNER,
    ADVANCED
}


export class Lesson {

    id:string;

    constructor(public title:string, duration:number, public description:string,
                 public transcript:string, private _level:StudentLevel) {

    }

    set level(level:string) {
        console.log("setting lesson level...");
        this._level = StudentLevel[level];
    }

}