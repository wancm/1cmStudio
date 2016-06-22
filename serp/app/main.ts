import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
// enableProdMode();

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));