/// <reference path="../../../custom-typings/semantic-ui.d.ts" />

import { Component, OnInit, Input, Output } from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler/src/runtime_compiler';

/* Core Services */
import { Framework_Global, Framework_Interface, Framework_Enum, BaseUiModel } from '../../../core/framework/ns_framework';
import { BroadcasterService, BaseControl } from '../../../core/angular2Application/ns_application';

/* Attribute Directives */
import { SerpPopUpDirective } from '../../../directives/attributes/serpPopUp';

@Component({
    moduleId: module.id,
    selector: 'serp-message',
    templateUrl: 'serp-message.component.html'
    , directives: [SerpPopUpDirective]
})
export class SerpMessageComponent extends BaseControl implements OnInit {
    private showMessageIdTooltip: boolean;

    public messageId: number = 0;
    public tooltipText: string = "";

    constructor(globalService: Framework_Global.GlobalService
        , applicationMonitorService: Framework_Global.ApplicationMonitorService
        , broadcasterService: BroadcasterService) {
        super(Framework_Enum.UiModelDataType.String, globalService, applicationMonitorService, broadcasterService);

        this.showMessageIdTooltip = this._globalService.appConfig.applicationMode != Framework_Enum.ApplicationMode.Production;
    }

    ngOnInit() {
        this.baseInit(Framework_Enum.UiModelDataType.String);
        this.initTooltip();
    }

    // method to initiate message tooltip text
    initTooltip(): void {
        switch (this._globalService.appConfig.applicationMode) {
            case Framework_Enum.ApplicationMode.Development:
                /*
                // TODO: temp comment of messageId tooltip
                if (this._globalService.isDefined(this.messageId)) {
                    this.tooltipText = this._globalService.stringFormat("{0}", this.messageId.toString());
                }
                */                
                break;

            default:
                break;
        }
    }

}