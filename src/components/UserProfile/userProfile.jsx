import React from 'react';
// import css from './userProfile.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
export const UserProfile = () => {
    const [name, setName] = React.useState('Имя')
    const [email, setEmail] = React.useState('E-mail')
    const [password, setPassword] = React.useState('Пароль')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
            <div>
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
            </div>
    );
}
