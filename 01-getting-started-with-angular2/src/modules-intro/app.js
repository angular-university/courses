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
var core_2 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var lessons_service_1 = require("./lessons.service");
var lessons_module_1 = require("./lessons.module");
var App = (function () {
    function App(lessonsService) {
        this.lessonsService = lessonsService;
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n\n        <input class=\"add-lesson\" placeholder=\"Add Lesson\"\n            (keyup.enter)=\"lessonsService.createLesson(input.value)\" #input>\n\n        <lessons-list [lessons]=\"lessonsService.lessons\"></lessons-list>\n\n        "
        }), 
        __metadata('design:paramtypes', [lessons_service_1.LessonsService])
    ], App);
    return App;
}());
exports.App = App;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_2.NgModule({
            declarations: [App],
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, lessons_module_1.LessonsModule],
            bootstrap: [App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map