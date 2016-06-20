import { Component, OnInit } from '@angular/core';

/* Ui Controls */
import { SerpMessageComponent } from '../ui-controls/message/serp-message.component';

@Component({
    moduleId: module.id,
    selector: 'site-header',
    templateUrl: 'header.component.html'
    , directives: [SerpMessageComponent]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('HeaderComponent ngOnInit()');
    }
}