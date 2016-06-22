import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/* Ui Controls */
import { SerpMessageComponent } from '../../ui-controls/message/serp-message.component';

@Component({
    moduleId: module.id,
    selector: 'site-header',
    templateUrl: 'header.component.html'
    , directives: [ROUTER_DIRECTIVES
        , SerpMessageComponent]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('HeaderComponent ngOnInit()');
    }
}