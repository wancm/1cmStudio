
/* Core Services */
import { Framework_Global, Framework_Interface, Framework_Enum } from '../../framework/ns_framework'

export class BaseUiModel implements Framework_Interface.IUiModel {
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

    constructor(protected _globalService: Framework_Global.GlobalService
        , protected _applicationMonitor: Framework_Global.ApplicationMonitorService) {
    }

    public init(dataType: Framework_Enum.UiModelDataType): void {
        this.dataType = dataType;
        this.cid = this._applicationMonitor.generateControlNumber(this.dataType).toString() + '_' + this.dataType.toString();
        this.initDisplayText();
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

    // event method to be invoked when changed of current language
    eLanguageChanged(languageId: number): void {
    }
}