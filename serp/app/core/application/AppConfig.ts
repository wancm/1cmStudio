import { Injectable } from '@angular/core';
import { Framework_Enum, Framework_Interface } from '../framework/ns_framework';

@Injectable()
export class AppConfig implements Framework_Interface.IAppConfig {
    public applicationMode: Framework_Enum.ApplicationMode;
    public apiUrl: string;

    constructor() {
        this.applicationMode = Framework_Enum.ApplicationMode.Development;
        this.apiUrl = 'not set yet';
    }
}