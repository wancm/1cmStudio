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
var router_1 = require('@angular/router');
/* Directives */
var take_order_component_1 = require('./take-order/take-order.component');
var order_list_component_1 = require('./order-list/order-list.component');
/* Ui Controls Directives */
var serp_message_component_1 = require('../../ui-controls/message/serp-message.component');
var OrderComponent = (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () { };
    OrderComponent.prototype.onTakeOrderClick = function () {
    };
    OrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'order',
            templateUrl: 'order.component.html',
            directives: [router_1.ROUTER_DIRECTIVES,
                serp_message_component_1.SerpMessageComponent,
                take_order_component_1.TakeOrderComponent,
                order_list_component_1.OrderListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map