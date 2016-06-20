/// <reference path="../../../custom-typings/semantic-ui.d.ts" />

import { Component, OnInit, Input, Output } from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler/src/runtime_compiler';

/* Core Services */
import { Framework_Global, Framework_Interface, Framework_Enum } from '../../../core/framework/ns_framework';
import { BroadcasterService } from '../../../core/application/ns_application';

/* Attribute Directives */
import { SerpPopUpDirective } from '../../../directives/attributes/serpPopUp';

@Component({
    moduleId: module.id,
    selector: 'serp-label',
    templateUrl: 'serp-label.component.html'
    , directives: [SerpPopUpDirective]
})
export class SerpLabelComponent implements OnInit {
    @Input() iMessageId: string;
    @Input() iDefaultText: string;
    @Input() uModel: Framework_Interface.IUiModel;

    private showMessageIdTooltip: boolean;
    private prefixNoDefinedAlert: string = "[Default Text: {0}]";

    public messageId: number = 0;
    public displayText: string = "";
    public tooltipText: string = "";

    constructor(private _globalService: Framework_Global.GlobalService
        , broadcasterService: BroadcasterService) {

        // subscribe onLanguageChange event
        broadcasterService.onChangeLanguage$.subscribe(languageId => this.onLanguageChange(languageId))

        this.showMessageIdTooltip = this._globalService.appConfig.applicationMode != Framework_Enum.ApplicationMode.Production;
    }

    ngOnInit() {
        if (this._globalService.isDefined(this.iMessageId)) {
            this.messageId = +this.iMessageId; // convert string to int
        }

        this.intDisplayText();
        this.initTooltip();
    }

    // method to change display text depends of current language
    onLanguageChange(languageId: number): void {
    }

    // method to initiate message display text
    intDisplayText(): void {
        // if messageId is not defined or messageId is 0
        if (!this._globalService.isDefined(this.messageId)
            || this.messageId == 0) {
            // default displayText to input defaultText
            //this.displayText = this._globalService.stringFormat(this.prefixNoDefinedAlert, this.iDefaultText);
            this.displayText = this.iDefaultText;
        } else {
            this.displayText = "[Retrieval message from server not implemented yet]";
        }
    }

    // method to initiate message tooltip text
    initTooltip(): void {
        switch (this._globalService.appConfig.applicationMode) {
            case Framework_Enum.ApplicationMode.Development:
                // TODO: temp comment of messageId tooltip
                /*
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