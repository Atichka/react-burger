import React from 'react';
import css from './profile.module.css';
import { NavLink, useLocation, Outlet } from "react-router-dom";

function getClassName(location, path) {
    return location.pathname === path ? css.linkActive : css.linkNoActive
}

export const ProfilePage = () => {
    const location = useLocation();
    const links = [
        {
            to: "/profile",
            text: "Профиль",
            description: "В этом разделе вы можете изменить свои персональные данные"
        },
        {
            to: "/profile/orders",
            text: "История заказов",
            description: "В этом разделе вы можете просмотреть свою историю заказов"
        },
        {
            to: "/",
            text: "Выход"
        },
    ];
    return (
        <div className={css.wrapper}>
            <nav className={css.links}>
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.to}
                        onClick={link.onClick}
                        className={getClassName(location, link.to)}
                    >
                        {link.text}
                    </NavLink>
                ))}
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
