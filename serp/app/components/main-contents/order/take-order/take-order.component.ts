
/// <reference path="../../../../../typings/globals/jquery/jquery.d.ts" />

import { Component, OnInit } from '@angular/core';

/* Ui Controls */
import { SerpMessageComponent } from '../../../ui-controls/message/serp-message.component';

declare var JQuery: JQuery;

@Component({
    moduleId: module.id,
    selector: 'take-order',
    templateUrl: 'take-order.component.html'
    , directives: [SerpMessageComponent]
})
export class TakeOrderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('1');
     }

    onAddItemClick(): void {
        $("#modalAddItem").modal('show');        
    }
}