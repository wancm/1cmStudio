"use strict";
/*
file that contains all the enums of the entire application
*/
var Framework_Enum;
(function (Framework_Enum) {
    (function (UiModelDataType) {
        UiModelDataType[UiModelDataType["String"] = 1] = "String";
        UiModelDataType[UiModelDataType["Number"] = 2] = "Number";
        UiModelDataType[UiModelDataType["Boolean"] = 3] = "Boolean";
    })(Framework_Enum.UiModelDataType || (Framework_Enum.UiModelDataType = {}));
    var UiModelDataType = Framework_Enum.UiModelDataType;
    ;
    (function (Module) {
        Module[Module["Product"] = 1] = "Product";
    })(Framework_Enum.Module || (Framework_Enum.Module = {}));
    var Module = Framework_Enum.Module;
    ;
    (function (ApplicationMode) {
        ApplicationMode[ApplicationMode["Development"] = 1] = "Development";
        ApplicationMode[ApplicationMode["Testing"] = 2] = "Testing";
        ApplicationMode[ApplicationMode["Production"] = 3] = "Production";
    })(Framework_Enum.ApplicationMode || (Framework_Enum.ApplicationMode = {}));
    var ApplicationMode = Framework_Enum.ApplicationMode;
    ;
})(Framework_Enum = exports.Framework_Enum || (exports.Framework_Enum = {}));
//# sourceMappingURL=enum.js.map