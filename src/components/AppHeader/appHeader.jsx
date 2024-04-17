import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './appHeader.module.css';

import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
        return (
            <header className={css.header}>
                <div className={css.container}>
                    <div className={css.box}>
                        <BurgerIcon type="primary" />
                        <NavLink to="/" className={css.linkWhite}>
                            Конструктор
                        </NavLink>
                    </div>
                    <div className={css.box}>
                        <ListIcon type="secondary" />
                        <NavLink to="/feed" className={css.link}>
                            Лента заказов
                        </NavLink>
                    </div>
                </div>
                <Logo />
                <div className={css.box}>
                    <ProfileIcon type="secondary" />
                    <NavLink to="/profile" className={css.link}>
                        Личный кабинет
                    </NavLink>
                </div>
            </header>
        );
}

