import { provideRouter, RouterConfig }  from '@angular/router';
import { RestaurantRoutes } from './routes/restaurant.routes'

import { DashboardComponent }     from './components/main-contents/dashboard/dashboard.component';

export const routes: RouterConfig = [
    {
        path: ''
        , component: DashboardComponent
    },
    ...RestaurantRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];