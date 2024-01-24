import React from 'react';

import appHeader from './appHeader.module.css';

import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
    render() {
        return (
            <header className={appHeader.header}>
                <div className={appHeader.container}>
                    <div className={appHeader.box}>
                        <BurgerIcon type="primary" />
                        <p className={appHeader.text}>Конструктор</p>
                    </div>
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
}

export default AppHeader;
