"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var lessons_service_1 = require("./lessons.service");
var LessonsList = (function () {
    function LessonsList(lessonsService) {
        this.lessonsService = lessonsService;
        this.lessons = [];
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LessonsList.prototype, "lessons", void 0);
    LessonsList = __decorate([
        core_1.Component({
            selector: 'lessons-list',
            template: "\n            <table class=\"lessons-list card card-strong\">\n                <tr *ngFor=\"let lesson of lessons\">\n                    <td>\n                        <img class=\"lesson-logo\" \n                        src=\"https://material.angularjs.org/latest/img/icons/angular-logo.svg\">  \n                    </td>\n                    <td>\n                        {{lesson.description}}    \n                    </td>\n                    <td>\n                        <button (click)=\"lessonsService.delete(lesson.id)\">Delete</button>\n                    </td>\n                </tr>\n           </table>\n\n        "
        }), 
        __metadata('design:paramtypes', [lessons_service_1.LessonsService])
    ], LessonsList);
    return LessonsList;
}());
exports.LessonsList = LessonsList;
//# sourceMappingURL=lessons-list.component.js.map