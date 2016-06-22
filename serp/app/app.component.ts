/* Core */
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/* Templates */
import { HeaderComponent } from './components/templates/header/header.component';
import { SideMenuComponent } from './components/templates/side-menu/side-menu.component';
import { FooterComponent } from './components/templates/footer/footer.component';

/* Core Services */
import { Framework_Global, Framework_Enum } from './core/framework/ns_framework';
import { BroadcasterService, AppConfig } from './core/angular2Application/ns_application';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'

    /* inject directives */
    , directives: [ROUTER_DIRECTIVES
        , HeaderComponent
        , SideMenuComponent
        , FooterComponent]

    /* inject services */
    , providers: [Framework_Global.GlobalService
        , Framework_Global.ApplicationMonitorService
        , AppConfig/* inject AppConfig */]

    /* inject singleton services */
    , viewProviders: [BroadcasterService]
})
export class AppComponent implements OnInit {
    appInstantiated: boolean = false;

    constructor(private appConfig: AppConfig) {
        this.appConfigInit();
    }

    ngOnInit() {
        console.log('AppComponent ngOnInit()');
    }

    // method to init AppConfig object
    appConfigInit(): void {
        // TODO: make ajax call to server side to instantiated AppConfig
        this.appConfig.apiUrl = "modified by AppComponent";
        this.appConfig.applicationMode = Framework_Enum.ApplicationMode.Development;

        this.appInstantiated = true;
        console.log('AppConfig instantiated');
    }
}