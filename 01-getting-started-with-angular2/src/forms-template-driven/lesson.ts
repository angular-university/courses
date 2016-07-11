

export enum StudentLevel {
    BEGINNER,
    ADVANCED
}



export class Lesson {

    public id:string;

    constructor(
        public title = "", 
        public duration = 0,
        public description = "",
        private _level = StudentLevel.BEGINNER) {

    }

    set level(level:string) {
        console.log("setting lesson level...");
        this._level = StudentLevel[level];
    }

    get level() {
        return StudentLevel[this._level];
    }


}