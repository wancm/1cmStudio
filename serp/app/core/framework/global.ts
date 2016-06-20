import { Injectable } from '@angular/core';
import { Framework_Enum, Framework_Interface } from './ns_framework';
import { AppConfig } from '../angular2Application/ns_application';

export namespace Framework_Global {
    @Injectable()
    export class GlobalService {
        public appConfig: Framework_Interface.IAppConfig;

        constructor(config: AppConfig) {
            this.appConfig = config;
        }

        isDefined(value): boolean {
            return value != undefined && value != null;
        }

        stringFormat(value, ...args: string[]): string {
            if (this.isDefined(args) && args.length > 0) {
                return value.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] != 'undefined'
                        ? args[number]
                        : match;
                });
            }
            return value;
        }
    }

    @Injectable()
    export class ApplicationMonitorService {
        private _appConfig: Framework_Interface.IAppConfig;
        private _autoNumber: number; // use for generating unique control id        

        public ControlMonitor: Framework_Interface.IControlMonitor[] = [];

        constructor(config: AppConfig) {
            this._appConfig = config;

            // initiate auto number starts with 0
            this._autoNumber = 0;
        }

        generateControlNumber(dataType: Framework_Enum.UiModelDataType): number {
            this._autoNumber++;

            // add new control generating log
            this.ControlMonitor.push({
                controlNumber: this._autoNumber
                , url: ''
            });

            return this._autoNumber;
        }
    }
}

