"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Core */
var core_1 = require('@angular/core');
/* Templates */
var header_component_1 = require('./components/header/header.component');
var side_menu_component_1 = require('./components/side-menu/side-menu.component');
var footer_component_1 = require('./components/footer/footer.component');
/* Core Services */
var ns_framework_1 = require('./core/framework/ns_framework');
var ns_application_1 = require('./core/angular2Application/ns_application');
var AppComponent = (function () {
    function AppComponent(appConfig) {
        this.appConfig = appConfig;
        this.appInstantiated = false;
        this.appConfigInit();
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('AppComponent ngOnInit()');
    };
    // method to init AppConfig object
    AppComponent.prototype.appConfigInit = function () {
        // TODO: make ajax call to server side to instantiated AppConfig
        this.appConfig.apiUrl = "modified by AppComponent";
        this.appConfig.applicationMode = ns_framework_1.Framework_Enum.ApplicationMode.Development;
        this.appInstantiated = true;
        console.log('AppConfig instantiated');
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [header_component_1.HeaderComponent,
                side_menu_component_1.SideMenuComponent,
                footer_component_1.FooterComponent],
            providers: [ns_framework_1.Framework_Global.GlobalService,
                ns_framework_1.Framework_Global.ApplicationMonitorService,
                ns_application_1.AppConfig /* inject AppConfig */],
            viewProviders: [ns_application_1.BroadcasterService]
        }), 
        __metadata('design:paramtypes', [ns_application_1.AppConfig])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map