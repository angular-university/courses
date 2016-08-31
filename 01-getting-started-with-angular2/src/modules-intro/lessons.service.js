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
var http_1 = require("@angular/http");
var xhr_headers_1 = require("./xhr-headers");
var LessonsService = (function () {
    function LessonsService(http) {
        this.http = http;
        this.lessons = [];
        this.loadLessons();
    }
    LessonsService.prototype.loadLessons = function () {
        var _this = this;
        this.http.get('/lessons')
            .map(function (res) { return res.json(); })
            .subscribe(function (lessons) { return _this.lessons = lessons; }, function (err) { return console.error(err); });
    };
    LessonsService.prototype.createLesson = function (description) {
        console.log("creating lesson ...");
        var lesson = { description: description };
        this.lessons.push(lesson);
        this.http.post('/lessons', JSON.stringify(lesson), xhr_headers_1.xhrHeaders())
            .subscribe(function () { }, function (err) { return console.error(err); });
    };
    LessonsService.prototype.delete = function (lessonId) {
        console.log("deleting lesson ...");
        var index = this.lessons.findIndex(function (lesson) { return lesson.id === lessonId; });
        this.lessons.splice(index, 1);
        this.http.delete("/lessons/" + lessonId, xhr_headers_1.xhrHeaders())
            .subscribe(function () { }, function (err) { return console.error(err); });
    };
    LessonsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LessonsService);
    return LessonsService;
}());
exports.LessonsService = LessonsService;
//# sourceMappingURL=lessons.service.js.map