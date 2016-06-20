import { Injectable } from '@angular/core';
import { Framework_Enum, Framework_Interface } from './ns_framework';
import { AppConfig } from '../application/ns_application';

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
}

