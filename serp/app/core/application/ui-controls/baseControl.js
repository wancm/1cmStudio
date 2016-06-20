"use strict";
var BaseControl = (function () {
    function BaseControl(dataType, _globalService, _applicationMonitor, _broadcasterService) {
        var _this = this;
        this._globalService = _globalService;
        this._applicationMonitor = _applicationMonitor;
        this._broadcasterService = _broadcasterService;
        this.prefixNoDefinedAlert = "[Default Text: {0}]";
        // subscribe onLanguageChange event
        this._broadcasterService.onChangeLanguage$.subscribe(function (languageId) { return _this.onLanguageChange(languageId); });
        this.initControl(dataType);
        this.initDisplayText();
    }
    BaseControl.prototype.initControl = function (dataType) {
        this.dataType = dataType;
        this.cid = this._applicationMonitor.generateControlNumber(this.dataType).toString() + '_' + this.dataType.toString();
    };
    // method to initiate message display text
    BaseControl.prototype.initDisplayText = function () {
        // if messageId is not defined or messageId is 0
        if (!this._globalService.isDefined(this.messageId)
            || this.messageId == 0) {
            // default displayText to input defaultText
            //this.displayText = this._globalService.stringFormat(this.prefixNoDefinedAlert, this.defaultMessage);
            this.displayMessage = this.defaultMessage;
        }
        else {
            this.displayMessage = "[Retrieval message from server not implemented yet]";
        }
    };
    // method to change display text depends of current language
    BaseControl.prototype.onLanguageChange = function (languageId) {
    };
    return BaseControl;
}());
exports.BaseControl = BaseControl;
//# sourceMappingURL=baseControl.js.map