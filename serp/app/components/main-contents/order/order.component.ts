import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/* Directives */
import { TakeOrderComponent } from './take-order/take-order.component'
import { OrderListComponent } from './order-list/order-list.component'

/* Ui Controls Directives */
import { SerpMessageComponent } from '../../ui-controls/message/serp-message.component';

@Component({
    moduleId: module.id,
    selector: 'order',
    templateUrl: 'order.component.html'
    , directives: [ROUTER_DIRECTIVES
        , SerpMessageComponent
        , TakeOrderComponent
        , OrderListComponent]
})
export class OrderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onTakeOrderClick(): void {

    }
}