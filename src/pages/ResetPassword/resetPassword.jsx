import React from 'react';
import css from './resetPassword.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";
import {apiResetPassword} from "../../utils/api";

export function ResetPasswordPage() {
    const [password, setPassword] = React.useState('')
    const [code, setCode] = React.useState('')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    const sendData = async (e) => {
        e.preventDefault();
        try {
            await apiResetPassword(password, code);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={css.wrapper}>
            <form id="formresetpassword" className="form" name="formresetpassword" onSubmit={sendData}>
                <h1 className={css.heading}>Восстановление пароля</h1>
                <div className={css.container}>
                    <Input
                        type={'text'}
                        placeholder={'Введите новый пароль'}
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
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={e => setCode(e.target.value)}
                        value={code}
                        name={'name'}
                        error={false}
                        ref={inputRef}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <div className={css.box}>
                        <Button htmlType="submit" type="primary" size="large">
                            Сохранить
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
