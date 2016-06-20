
/* Core Services */
import { Framework_Global, Framework_Interface, Framework_Enum } from '../../framework/ns_framework'
import { BroadcasterService } from '../ns_application';

export class BaseControl implements Framework_Interface.IUiModel {
    public cid: string;
    public dataType: Framework_Enum.UiModelDataType;
    public sValue: string;
    public nValue: number;
    public bValue: boolean;
    public key: string;
    public messageId: number;
    public displayMessage: string;
    public defaultMessage: string;

    private prefixNoDefinedAlert: string = "[Default Text: {0}]";

    constructor(dataType: Framework_Enum.UiModelDataType
        , protected _globalService: Framework_Global.GlobalService
        , protected _applicationMonitor: Framework_Global.ApplicationMonitorService
        , protected _broadcasterService: BroadcasterService) {

        // subscribe onLanguageChange event
        this._broadcasterService.onChangeLanguage$.subscribe(languageId => this.onLanguageChange(languageId))

        this.initControl(dataType);
        this.initDisplayText();
    }

    initControl(dataType: Framework_Enum.UiModelDataType): void {
        this.dataType = dataType;
        this.cid = this._applicationMonitor.generateControlNumber(this.dataType).toString() + '_' + this.dataType.toString();
    }

    // method to initiate message display text
    initDisplayText(): void {
        // if messageId is not defined or messageId is 0
        if (!this._globalService.isDefined(this.messageId)
            || this.messageId == 0) {
            // default displayText to input defaultText
            //this.displayText = this._globalService.stringFormat(this.prefixNoDefinedAlert, this.defaultMessage);
            this.displayMessage = this.defaultMessage;
        } else {
            this.displayMessage = "[Retrieval message from server not implemented yet]";
        }
    }

    // method to change display text depends of current language
    onLanguageChange(languageId: number): void {
    }
}