import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'site-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('FooterComponent ngOnInit()');
    }
}