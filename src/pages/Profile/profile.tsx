import React from 'react';
import css from './profile.module.css';
import { NavLink, useLocation, Outlet } from "react-router-dom";
import { logOutUser } from '../../services/actions/userAction'
import {useDispatch, useSelector} from "react-redux";
import {getOrderTable, getWebSocketStatus} from "../../services/order-table/slice";
import {WebSocketStatus} from "../../types/order-table";
import {wsConnect, wsDisconnect} from "../../services/order-table/actions";

type TLinks = {
    to: string;
    text: string;
    description: string;
}

const ORDER_TABLE_SERVER_URL = "ws://localhost:3000";

export const ProfilePage = (): React.JSX.Element => {
    // const table = useSelector(getOrderTable);
    // const status = useSelector(getWebSocketStatus);
    // const isDisconnected = status !== WebSocketStatus.ONLINE;

    const dispatch = useDispatch();
    const location = useLocation();

    const links: Array<TLinks> = [
        {
            to: "",
            text: "Профиль",
            description: "В этом разделе вы можете изменить свои персональные данные"
        },
        {
            to: "orders",
            text: "История заказов",
            description: "В этом разделе вы можете просмотреть свою историю заказов"
        }
    ];
    const onLogout = () => {
        // @ts-ignore
        dispatch(logOutUser());
    }
    return (
        <div className={css.wrapper}>
            <nav className={css.links}>
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        end
                        to={link.to}
                        className={({isActive}) => isActive ? css.linkActive : css.linkNoActive}
                    >
                        {link.text}
                    </NavLink>
                ))}
                <button className={css.button} onClick={onLogout}>
                    Выход
                </button>
                {location.pathname === "/profile" && (
                    <p className={css.text}>
                        {links[0].description}
                    </p>
                )}
                {location.pathname === "/profile/orders" && (
                    <div>
                        <h3 className={css.text}>
                            {links[1].description}
                        </h3>
                        {/* <p>
                            Статус соединения: <span>{status}</span>
                        </p>
                        <div>
                            <button
                                disabled={!isDisconnected}
                                onClick={connect}
                            >
                                Подключение
                            </button>
                            <button
                                disabled={isDisconnected}
                                onClick={disconnect}
                            >
                                Отключение
                            </button>
                        </div> */}
                        {/* <OrderTable table={table}/> */}
                    </div>
                )}
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
