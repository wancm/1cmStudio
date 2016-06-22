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
/* Ui Controls */
var serp_message_component_1 = require('../../../ui-controls/message/serp-message.component');
var TakeOrderComponent = (function () {
    function TakeOrderComponent() {
    }
    TakeOrderComponent.prototype.ngOnInit = function () { };
    TakeOrderComponent.prototype.onAddItemClick = function () {
    };
    TakeOrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'take-order',
            templateUrl: 'take-order.component.html',
            directives: [serp_message_component_1.SerpMessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TakeOrderComponent);
    return TakeOrderComponent;
}());
exports.TakeOrderComponent = TakeOrderComponent;
//# sourceMappingURL=take-order.component.js.map