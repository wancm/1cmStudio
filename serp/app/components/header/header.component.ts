import { Component, OnInit } from '@angular/core';

/* Ui Controls */
import { SerpLabelComponent } from '../ui-controls/label/serp-label.component';

@Component({
    moduleId: module.id,
    selector: 'site-header',
    templateUrl: 'header.component.html'
    , directives: [SerpLabelComponent]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('HeaderComponent ngOnInit()');
    }
}