import React from 'react';
import css from './resetPassword.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";
import {apiResetPassword} from "../../utils/api";
import {useForm} from "../../hooks/useForm";

export function ResetPasswordPage() {
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const { values, handleChange } = useForm({
        password: "",
        code: ""
    });

    const sendData = async (e) => {
        e.preventDefault();
        try {
            await apiResetPassword(values.password, values.code);
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
                        onChange={handleChange}
                        name="password"
                        onIconClick={onIconClick}
                        type="password"
                        value={values.password}
                        placeholder="Пароль"
                    />
                    <Input
                        onChange={handleChange}
                        type="text"
                        value={values.code}
                        placeholder="Введите код из письма"
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
