import React from 'react';

import css from './appHeader.module.css';

import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
        return (
            <header className={css.header}>
                <div className={css.container}>
                    <a href="#" className={css.box}>
                        <BurgerIcon type="primary" />
                        <p className={css.text}>Конструктор</p>
                    </a>
                    <div className={css.box}>
                        <ListIcon type="secondary" />
                        <button className={css.button}>Лента заказов</button>
                    </div>
                </div>
                <Logo />
                <div className={css.box}>
                    <ProfileIcon type="secondary" />
                    <button className={css.button}>Личный кабинет</button>
                </div>
            </header>
        );
}

