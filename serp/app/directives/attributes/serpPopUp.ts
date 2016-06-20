
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[serpPopUp]' })
export class SerpPopUpDirective {
    constructor(el: ElementRef) {
        $(el.nativeElement).popup({

        });
    }
}