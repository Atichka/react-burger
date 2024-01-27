import React from 'react';

import appHeader from './appHeader.module.css';

import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
        return (
            <header className={appHeader.header}>
                <div className={appHeader.container}>
                    <a href="#" className={appHeader.box}>
                        <BurgerIcon type="primary" />
                        <p className={appHeader.text}>Конструктор</p>
                    </a>
                    <div className={appHeader.box}>
                        <ListIcon type="secondary" />
                        <button className={appHeader.button}>Лента заказов</button>
                    </div>
                </div>
                <Logo />
                <div className={appHeader.box}>
                    <ProfileIcon type="secondary" />
                    <button className={appHeader.button}>Личный кабинет</button>
                </div>
            </header>
        );
}

