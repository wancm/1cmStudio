/// <reference path="../../../custom-typings/semantic-ui.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
/* Core Services */
var ns_framework_1 = require('../../../core/framework/ns_framework');
var ns_application_1 = require('../../../core/angular2Application/ns_application');
/* Attribute Directives */
var serpPopUp_1 = require('../../../directives/attributes/serpPopUp');
var SerpMessageComponent = (function (_super) {
    __extends(SerpMessageComponent, _super);
    function SerpMessageComponent(globalService, applicationMonitorService, broadcasterService) {
        _super.call(this, ns_framework_1.Framework_Enum.UiModelDataType.String, globalService, applicationMonitorService, broadcasterService);
        this.messageId = 0;
        this.tooltipText = "";
        this.showMessageIdTooltip = this._globalService.appConfig.applicationMode != ns_framework_1.Framework_Enum.ApplicationMode.Production;
    }
    SerpMessageComponent.prototype.ngOnInit = function () {
        this.baseInit(ns_framework_1.Framework_Enum.UiModelDataType.String);
        this.initTooltip();
    };
    // method to initiate message tooltip text
    SerpMessageComponent.prototype.initTooltip = function () {
        switch (this._globalService.appConfig.applicationMode) {
            case ns_framework_1.Framework_Enum.ApplicationMode.Development:
                /*
                // TODO: temp comment of messageId tooltip
                if (this._globalService.isDefined(this.messageId)) {
                    this.tooltipText = this._globalService.stringFormat("{0}", this.messageId.toString());
                }
                */
                break;
            default:
                break;
        }
    };
    SerpMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'serp-message',
            templateUrl: 'serp-message.component.html',
            directives: [serpPopUp_1.SerpPopUpDirective]
        }), 
        __metadata('design:paramtypes', [ns_framework_1.Framework_Global.GlobalService, ns_framework_1.Framework_Global.ApplicationMonitorService, ns_application_1.BroadcasterService])
    ], SerpMessageComponent);
    return SerpMessageComponent;
}(ns_application_1.BaseControl));
exports.SerpMessageComponent = SerpMessageComponent;
//# sourceMappingURL=serp-message.component.js.map