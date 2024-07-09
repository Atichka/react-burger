import React from 'react';
import css from './profile-orders.module.css';
import {Orders} from "../Orders/orders";

export const ProfileOrders = (): React.JSX.Element => {
    return (
        <div className={css.block}>
            <Orders />
        </div>
    );
}
