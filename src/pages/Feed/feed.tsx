import React from 'react';
import css from './feed.module.css';

export const FeedPage = (): React.JSX.Element => {
    return (
        <div className={css.block}>
            <h1 className={css.title}>Лента заказов</h1>
            <div className={css.box}>
                {/*<ListOrders />*/}
                {/*<StatusOrders />*/}
            </div>
        </div>
    );
}
