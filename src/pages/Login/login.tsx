import React from 'react';
import css from './login.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";
import {logInUser} from "../../services/actions/userAction";
import { useDispatch } from "../../services/store";
import {useForm} from "../../hooks/useForm";

type LoginFormData = {
    login: string;
    password: string;
}

export function LoginPage(): React.JSX.Element {
    const dispatch = useDispatch();
    const { values, handleChange } = useForm<LoginFormData>({
        login: "",
        password: "",
    });

    const sendData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // @ts-ignore
        dispatch(logInUser(values.login, values.password));
    }

    return (
        <div className={css.wrapper}>
            <form id="formlogin" className="form" name="formlogin" onSubmit={sendData}>
                <h1 className={css.heading}>Вход</h1>
                <div className={css.container}>
                    <EmailInput
                        onChange={handleChange}
                        value={values.login}
                        name="login"
                    ></EmailInput>
                    <PasswordInput
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                    ></PasswordInput>
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
