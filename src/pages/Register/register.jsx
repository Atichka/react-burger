import React from 'react';
import css from './register.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";

export function RegisterPage() {
    const [email, setEmail] = React.useState('E-mail')
    const [name, setName] = React.useState('Имя')
    const [password, setPassword] = React.useState('Пароль')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <div className={css.wrapper}>
            <form id="formregister" className="form" name="formregister">
                <h1 className={css.heading}>Регистрация</h1>
                <div className={css.container}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setName(e.target.value)}
                        value={name}
                        name={'name'}
                        error={false}
                        ref={inputRef}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <Input
                        type={'text'}
                        placeholder={'E-mail'}
                        onChange={e => setEmail(e.target.value)}
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
                        placeholder={'Пароль'}
                        onChange={e => setPassword(e.target.value)}
                        icon={'ShowIcon'}
                        value={password}
                        name={'name'}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <div className={css.box}>
                        <Button htmlType="submit" type="primary" size="large">
                            Зарегистрироваться
                        </Button>
                    </div>
                    <div className={css.container}>
                        <p className={css.text}>Уже зарегистрированы?&nbsp;
                            <Link to='/login' className={css.link}>
                                Войти
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
