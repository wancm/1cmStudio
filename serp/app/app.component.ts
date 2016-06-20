/* Core */
import { Component, OnInit } from '@angular/core';

/* Templates */
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FooterComponent } from './components/footer/footer.component';

/* Core Services */
import { Framework_Global, Framework_Enum } from './core/framework/ns_framework';
import { BroadcasterService, AppConfig } from './core/angular2Application/ns_application';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'

    /* inject directives */
    , directives: [HeaderComponent
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