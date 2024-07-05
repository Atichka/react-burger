import React, { useEffect, FC } from "react";

import css from "./orders.module.css";

import FeedCard from "../FeedCard/feedCard";

import {
    wsConnect,
    wsDisconnect,
} from "../../services/actions/orderProfileAction";
import { useDispatch, useSelector } from "../../services/store";
import {Link, useLocation} from "react-router-dom";
import { TOrder } from "../../utils/types";

export const Orders = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { orders } = useSelector((state) => state.ordersProfile.orders);

    useEffect(() => {
        const accessToken: string | undefined = localStorage.getItem("accessToken")
            ? localStorage.getItem("accessToken")?.slice(7)
            : "";
        const wsFeedOrdersUserUrl = `wss://norma.nomoreparties.space/orders?token=${accessToken}`;
        dispatch(wsConnect(wsFeedOrdersUserUrl));
        return () => {
            dispatch(wsDisconnect());
        };
    }, [dispatch]);

    return (
        <ul className={`custom-scroll ${css.list}`}>
            {orders &&
                orders
                    .slice()
                    .reverse()
                    .map((order: TOrder) => (
                        <Link
                            to={`/profile/orders/${order._id}`}
                            className={css.link}
                            key={order._id}
                            state={{ background: location }}
                        >
                            <FeedCard key={order._id} order={order} />
                        </Link>
                    ))}
        </ul>
    );
};
