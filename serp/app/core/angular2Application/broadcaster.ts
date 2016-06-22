import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BroadcasterService {
    public onChangeLanguage$: EventEmitter<number>;

    constructor() {
        this.onChangeLanguage$ = new EventEmitter<number>();
    }

    // use for broadcasting Language change
    ChangeLanguage(languageId: number): void {
        this.onChangeLanguage$.emit(languageId);
    }
}