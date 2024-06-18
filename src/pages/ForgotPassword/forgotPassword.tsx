import React from 'react';
import css from './forgotPassword.module.css';
import {Button, EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from "react-router-dom";
import { apiForgotPassword } from "../../utils/api";
import {useForm} from "../../hooks/useForm";

type ForgotPasswordFormData = {
    login: string;
}

export function ForgotPasswordPage(): React.JSX.Element {
    const navigate = useNavigate();

    const { values, handleChange } = useForm<ForgotPasswordFormData>({
        login: "",
    });

    const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await apiForgotPassword(values.login);
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
                    <EmailInput
                        onChange={handleChange}
                        value={values.login}
                        name="login"
                    ></EmailInput>
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
