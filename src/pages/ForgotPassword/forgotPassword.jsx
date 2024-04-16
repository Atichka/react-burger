import React from 'react';
import css from './forgotPassword.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";

export function ForgotPasswordPage() {
    const [email, setEmail] = React.useState('E-mail')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <div className={css.wrapper}>
            <form id="formforgotpassword" className="form" name="formforgotpassword">
                <h1 className={css.heading}>Восстановление пароля</h1>
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
                    <div className={css.box}>
                        <Button htmlType="submit" type="primary" size="large">
                            Восстановить
                        </Button>
                    </div>
                    <div className={css.container}>
                        <p className={css.text}>Вспомнили пароль?&nbsp;
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
