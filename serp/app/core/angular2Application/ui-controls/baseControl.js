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
var ns_framework_1 = require('../../framework/ns_framework');
var BaseControl = (function () {
    function BaseControl(dataType, _globalService, _applicationMonitor, _broadcasterService) {
        var _this = this;
        this._globalService = _globalService;
        this._applicationMonitor = _applicationMonitor;
        this._broadcasterService = _broadcasterService;
        // subscribe onLanguageChange event
        this._broadcasterService.onChangeLanguage$.subscribe(function (languageId) { return _this.onLanguageChange(languageId); });
        this.setDataType(dataType);
    }
    BaseControl.prototype.setDataType = function (dataType) {
        this.iModel.dataType = dataType;
    };
    // method to change display text depends of current language
    BaseControl.prototype.onLanguageChange = function (languageId) {
        // invoke model language change event
        this.iModel.eLanguageChanged(languageId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaseControl.prototype, "iMessageId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaseControl.prototype, "iDefaultText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ns_framework_1.BaseUiModel)
    ], BaseControl.prototype, "iModel", void 0);
    return BaseControl;
}());
exports.BaseControl = BaseControl;
//# sourceMappingURL=baseControl.js.map