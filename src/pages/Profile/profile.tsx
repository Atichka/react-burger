import React from 'react';
import css from './profile.module.css';
import { NavLink, useLocation, Outlet } from "react-router-dom";
import { logOutUser } from '../../services/actions/userAction'
import {useDispatch} from "react-redux";

type TLinks = {
    to: string;
    text: string;
    description: string;
}

export const ProfilePage = (): React.JSX.Element => {
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
                    <p className={css.text}>
                        {links[1].description}
                    </p>
                )}
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
