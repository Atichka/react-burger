import React from 'react';
import css from './profile.module.css';
import { NavLink, useLocation } from "react-router-dom";
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
export const ProfilePage = () => {
    const location = useLocation();
    const links = [
        {
            to: "/profile/user",
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
    const [name, setName] = React.useState('Имя')
    const [email, setEmail] = React.useState('E-mail')
    const [password, setPassword] = React.useState('Пароль')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <div className={css.wrapper}>
            <nav className={css.links}>
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.to}
                        onClick={link.onClick}
                        className={() =>
                            location.pathname === '/profile' ? css.linkActive : css.link}
                    >
                        {link.text}
                    </NavLink>
                ))}
                {location.pathname === "/profile/user" && (
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
            <main className={css.container}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    icon={'EditIcon'}
                    value={name}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Input
                    type={'text'}
                    placeholder={'E-mail'}
                    onChange={e => setEmail(e.target.value)}
                    icon={'EditIcon'}
                    value={email}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <Input
                    type={'text'}
                    placeholder={'Введите новый пароль'}
                    onChange={e => setPassword(e.target.value)}
                    icon={'EditIcon'}
                    value={password}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
            </main>
        </div>
            );
}
