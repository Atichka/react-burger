import React from 'react';
import css from './list-orders.module.css';
import {TBurgerConstructor, TOrder, TOrders} from "../../utils/types";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "../../services/store";
import {WS_FEED_URL} from "../../const";

export default function ListOrders(): React.JSX.Element {
    // const orders = useSelector(
    //     (state) => state.orderFeed.orders,
    // );
    const location = useLocation();
    return (
        <div className={css.container}>
            <div className={css.content}>
                {/*{!isLoading && (<div className={css.cards}>*/}
                {/*    {orders.orders && orders.orders.map((order: TOrder) => (*/}
                {/*        <Link*/}
                {/*            to={`/feed/${order._id}`}*/}
                {/*            className={css.link}*/}
                {/*            key={order._id}*/}
                {/*            state={{ background: location }}*/}
                {/*        >*/}
                {/*             /!*<Card key={ingredient._id}*!/*/}
                {/*             /!*      image={ingredient.image}*!/*/}
                {/*             /!*      price={ingredient.price}*!/*/}
                {/*             /!*      name={ingredient.name}*!/*/}
                {/*             /!*      id={ingredient._id}*!/*/}
                {/*             /!*      type={ingredient.type}/>*!/*/}
                {/*        </Link>*/}
                {/*    ))}*/}
                {/*</div>)}*/}
                {/*<ul className={`custom-scroll ${styles.order_feed}`}>*/}
                {/*    {orders &&*/}
                {/*        orders.map((order) => <OrderCard key={order._id} order={order} />)}*/}
                {/*</ul>*/}
            </div>
        </div>

    );
}

