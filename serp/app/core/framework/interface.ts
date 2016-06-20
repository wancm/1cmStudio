import {Framework_Enum} from './enum';

export namespace Framework_Interface {
    export interface IAppConfig {
        applicationMode: Framework_Enum.ApplicationMode;
        apiUrl: string;
    }

    export interface IUiModel {
        cid: string;
        dataType: Framework_Enum.UiModelDataType;
        sValue: string;
        nValue: number;
        bValue: boolean;
        key: string;
    }
}