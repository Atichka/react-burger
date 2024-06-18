import React from 'react';
import css from './resetPassword.module.css';
import {Input, Button, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";
import {apiResetPassword} from "../../utils/api";
import {useForm} from "../../hooks/useForm";

type ResetPasswordFormData = {
    password: string;
    code: string;
}

export function ResetPasswordPage(): React.JSX.Element {
    const { values, handleChange } = useForm<ResetPasswordFormData>({
        password: "",
        code: ""
    });

    const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
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
                    <PasswordInput
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                    ></PasswordInput>
                    <Input
                        onPointerEnterCapture={((event: PointerEvent): void => {})}
                        onPointerLeaveCapture={((event: PointerEvent): void => {})}
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
