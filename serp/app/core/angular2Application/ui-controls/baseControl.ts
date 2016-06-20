
import { Input, Output } from '@angular/core';

/* Core Services */
import { Framework_Global, Framework_Interface, Framework_Enum, BaseUiModel } from '../../framework/ns_framework'
import { BroadcasterService } from '../ns_application';

export class BaseControl {
    @Input() protected iMessageId: string;
    @Input() protected iDefaultText: string;
    @Input() protected iModel: BaseUiModel;

    constructor(dataType: Framework_Enum.UiModelDataType
        , protected _globalService: Framework_Global.GlobalService
        , protected _applicationMonitorService: Framework_Global.ApplicationMonitorService
        , protected _broadcasterService: BroadcasterService) {

        // subscribe onLanguageChange event
        this._broadcasterService.onChangeLanguage$.subscribe(languageId => this.onLanguageChange(languageId))

        this.initUiModel();
    }

    protected baseInit(dataType: Framework_Enum.UiModelDataType): void {
        if (this._globalService.isDefined(this.iMessageId)) {
            // bind messageId
            this.iModel.messageId = +this.iMessageId; // convert string to int
        }
        this.iModel.defaultMessage = this.iDefaultText;
        this.iModel.init(dataType);
    }

    initUiModel(): void {
        if (!this._globalService.isDefined(this.iModel)) {
            this.iModel = new BaseUiModel(this._globalService, this._applicationMonitorService);
        }
    }

    // method to change display text depends of current language
    onLanguageChange(languageId: number): void {
        // invoke model language change event
        this.iModel.eLanguageChanged(languageId);
    }
}