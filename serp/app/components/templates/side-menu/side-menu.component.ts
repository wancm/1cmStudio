import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'side-menu',
    templateUrl: 'side-menu.component.html'
})
export class SideMenuComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log("SideMenuComponent ngOnInit()");
    }
}