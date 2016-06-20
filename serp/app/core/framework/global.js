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
var core_1 = require('@angular/core');
var ns_application_1 = require('../angular2Application/ns_application');
var Framework_Global;
(function (Framework_Global) {
    var GlobalService = (function () {
        function GlobalService(config) {
            this.appConfig = config;
        }
        GlobalService.prototype.isDefined = function (value) {
            return value != undefined && value != null;
        };
        GlobalService.prototype.stringFormat = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (this.isDefined(args) && args.length > 0) {
                return value.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] != 'undefined'
                        ? args[number]
                        : match;
                });
            }
            return value;
        };
        GlobalService = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [ns_application_1.AppConfig])
        ], GlobalService);
        return GlobalService;
    }());
    Framework_Global.GlobalService = GlobalService;
    var ApplicationMonitorService = (function () {
        function ApplicationMonitorService(config) {
            this.ControlMonitor = [];
            this._appConfig = config;
            // initiate auto number starts with 0
            this._autoNumber = 0;
        }
        ApplicationMonitorService.prototype.generateControlNumber = function (dataType) {
            this._autoNumber++;
            // add new control generating log
            this.ControlMonitor.push({
                controlNumber: this._autoNumber,
                url: ''
            });
            return this._autoNumber;
        };
        ApplicationMonitorService = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [ns_application_1.AppConfig])
        ], ApplicationMonitorService);
        return ApplicationMonitorService;
    }());
    Framework_Global.ApplicationMonitorService = ApplicationMonitorService;
})(Framework_Global = exports.Framework_Global || (exports.Framework_Global = {}));
//# sourceMappingURL=global.js.map