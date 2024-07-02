import React, {useCallback, useEffect} from 'react';
import css from './feed.module.css';
import {useSelector, useDispatch} from "../../services/store";
import {WS_FEED_URL} from "../../const";
import {Link, useLocation} from "react-router-dom";
import {wsConnect, wsDisconnect} from "../../services/actions/orderFeedAction";
import FeedCard from "../../components/FeedCard/feedCard";

export const FeedPage = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { orders, total, totalToday } = useSelector(
        (state) => state.feedOrders.orders,
    );

    const connectToWebSocket = useCallback(() => {
        dispatch(wsConnect(WS_FEED_URL))
        return () => {
            dispatch(wsDisconnect());
        };
    }, [dispatch]);

    useEffect(() => {
        const disconnectWebSocket = connectToWebSocket();
        return () => disconnectWebSocket();
    }, []);

    const doneOrders = orders
        ?.filter((order) => order.status === "done")
        .slice(0, 9);

    const pendingOrders = orders
        ?.filter((order) => order.status === "pending")
        .slice(0, 9);

    return (
        <div className={css.block}>
            <h1 className={css.title}>Лента заказов</h1>
            <div className={css.box}>
                <div className={css.orders}>
                    {orders && orders.map((order: any) => (
                        <Link
                            to={`/orders/${order._id}`}
                            className={css.link}
                            key={order._id}
                            state={{ background: location }}
                        >
                            <FeedCard key={order._id}
                                       order={order}/>
                        </Link>
                    ))}
                </div>
                <div className={css.container}>
                    <div className={css.box}>
                        <div className={css.status}>
                            <h2 className="text text_type_main-medium">Готовы:</h2>
                            <ul className={css.list}>
                                {doneOrders &&
                                    doneOrders.map((order, i) => (
                                        <li
                                            key={i}
                                            className={`text text_type_digits-default ${css.status_done}`}
                                        >
                                            {order.number}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className={css.status}>
                            <h2 className="text text_type_main-medium">В работе:</h2>
                            <ul className={css.list}>
                                {pendingOrders &&
                                    pendingOrders.map((order, i) => (
                                        <li key={i} className="text text_type_digits-default">
                                            {order.number}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div className={css.caption}>
                        <h2 className="text text_type_main-medium">
                            Выполнено за все время:
                        </h2>
                        <p className="text text_type_digits-large">{total || 0}</p>
                    </div>
                    <div className={css.caption}>
                        <h2 className="text text_type_main-medium">
                            Выполнено за сегодня:
                        </h2>
                        <p className="text text_type_digits-large">{totalToday || 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
