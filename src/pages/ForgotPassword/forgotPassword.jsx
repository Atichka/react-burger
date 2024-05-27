import React from 'react';
import css from './forgotPassword.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from "react-router-dom";
import { apiForgotPassword } from "../../utils/api";
import {useForm} from "../../hooks/useForm";

export function ForgotPasswordPage() {
    const navigate = useNavigate();
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const { values, handleChange } = useForm({
        email: "",
    });

    const sendData = async (e) => {
        e.preventDefault();
        try {
            await apiForgotPassword(values.email);
            navigate("/reset-password", { replace: true });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={css.wrapper}>
            <form id="formforgotpassword" className="form" name="formforgotpassword" onSubmit={sendData}>
                <h1 className={css.heading}>Восстановление пароля</h1>
                <div className={css.container}>
                    <Input
                        placeholder={'E-mail'}
                        onChange={handleChange}
                        type="email"
                        onIconClick={onIconClick}
                        value={values.email}
                        name="email"
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
