
import { Component, OnInit } from '@angular/core';

/* Ui Controls */
import { SerpMessageComponent } from '../../../ui-controls/message/serp-message.component';

@Component({
    moduleId: module.id,
    selector: 'take-order',
    templateUrl: 'take-order.component.html'
    , directives: [SerpMessageComponent]
})
export class TakeOrderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onAddItemClick(): void {
    }
}