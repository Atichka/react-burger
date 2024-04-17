import React from 'react';
import css from './login.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";

export function LoginPage() {
    const [email, setEmail] = React.useState('E-mail')
    const [password, setPassword] = React.useState('Пароль')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <div className={css.wrapper}>
            <form id="formlogin" className="form" name="formlogin">
                <h1 className={css.heading}>Вход</h1>
                <div className={css.container}>
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
                            Войти
                        </Button>
                    </div>
                    <div className={css.container}>
                        <p className={css.text}>Вы - новый пользователь?&nbsp;
                            <Link to='/register' className={css.link}>
                                Зарегистрироваться
                            </Link>
                        </p>
                        <p className={css.text}>Забыли пароль?&nbsp;
                            <Link to='/forgot-password' className={css.link}>
                                Восстановить пароль
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}