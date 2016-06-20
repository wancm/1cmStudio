/// <reference path="../../../custom-typings/semantic-ui.d.ts" />
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
/* Core Services */
var ns_framework_1 = require('../../../core/framework/ns_framework');
var ns_application_1 = require('../../../core/application/ns_application');
/* Attribute Directives */
var serpPopUp_1 = require('../../../directives/attributes/serpPopUp');
var SerpLabelComponent = (function () {
    function SerpLabelComponent(_globalService, broadcasterService) {
        var _this = this;
        this._globalService = _globalService;
        this.prefixNoDefinedAlert = "[Default Text: {0}]";
        this.messageId = 0;
        this.displayText = "";
        this.tooltipText = "";
        // subscribe onLanguageChange event
        broadcasterService.onChangeLanguage$.subscribe(function (languageId) { return _this.onLanguageChange(languageId); });
        this.showMessageIdTooltip = this._globalService.appConfig.applicationMode != ns_framework_1.Framework_Enum.ApplicationMode.Production;
    }
    SerpLabelComponent.prototype.ngOnInit = function () {
        if (this._globalService.isDefined(this.iMessageId)) {
            this.messageId = +this.iMessageId; // convert string to int
        }
        this.intDisplayText();
        this.initTooltip();
    };
    // method to change display text depends of current language
    SerpLabelComponent.prototype.onLanguageChange = function (languageId) {
    };
    // method to initiate message display text
    SerpLabelComponent.prototype.intDisplayText = function () {
        // if messageId is not defined or messageId is 0
        if (!this._globalService.isDefined(this.messageId)
            || this.messageId == 0) {
            // default displayText to input defaultText
            //this.displayText = this._globalService.stringFormat(this.prefixNoDefinedAlert, this.iDefaultText);
            this.displayText = this.iDefaultText;
        }
        else {
            this.displayText = "[Retrieval message from server not implemented yet]";
        }
    };
    // method to initiate message tooltip text
    SerpLabelComponent.prototype.initTooltip = function () {
        switch (this._globalService.appConfig.applicationMode) {
            case ns_framework_1.Framework_Enum.ApplicationMode.Development:
                // TODO: temp comment of messageId tooltip
                /*
                if (this._globalService.isDefined(this.messageId)) {
                    this.tooltipText = this._globalService.stringFormat("{0}", this.messageId.toString());
                }
                */
                break;
            default:
                break;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SerpLabelComponent.prototype, "iMessageId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SerpLabelComponent.prototype, "iDefaultText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SerpLabelComponent.prototype, "uModel", void 0);
    SerpLabelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'serp-label',
            templateUrl: 'serp-label.component.html',
            directives: [serpPopUp_1.SerpPopUpDirective]
        }), 
        __metadata('design:paramtypes', [ns_framework_1.Framework_Global.GlobalService, ns_application_1.BroadcasterService])
    ], SerpLabelComponent);
    return SerpLabelComponent;
}());
exports.SerpLabelComponent = SerpLabelComponent;
//# sourceMappingURL=serp-label.component.js.map