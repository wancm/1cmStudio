import { RouterConfig }          from '@angular/router';
import { OrderComponent }     from '../components/main-contents/order/order.component';
import { TakeOrderComponent }     from '../components/main-contents/order/take-order/take-order.component';

export const RestaurantRoutes: RouterConfig = [
    {
        path: 'order'
        , component: OrderComponent
    }
    , {
        path: 'take-order'
        , component: TakeOrderComponent
    }
];