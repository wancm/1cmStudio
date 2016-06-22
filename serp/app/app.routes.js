"use strict";
var router_1 = require('@angular/router');
var restaurant_routes_1 = require('./routes/restaurant.routes');
var dashboard_component_1 = require('./components/main-contents/dashboard/dashboard.component');
exports.routes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent
    }
].concat(restaurant_routes_1.RestaurantRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map