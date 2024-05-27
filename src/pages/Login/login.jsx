import React from 'react';
import css from './login.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from "react-router-dom";
import {logInUser} from "../../services/actions/userAction";
import { useDispatch } from "react-redux";
import {useForm} from "../../hooks/useForm";

export function LoginPage() {
    const inputRef = React.useRef(null)
    const dispatch = useDispatch();
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    const { values, handleChange } = useForm({
        login: "",
        password: "",
    });

    const sendData = (e) => {
        e.preventDefault();
        dispatch(logInUser(values.login, values.password));
    }

    return (
        <div className={css.wrapper}>
            <form id="formlogin" className="form" name="formlogin" onSubmit={sendData}>
                <h1 className={css.heading}>Вход</h1>
                <div className={css.container}>
                    <Input
                        onChange={handleChange}
                        type="email"
                        value={values.login}
                        name="login"
                        placeholder="E-mail"
                    ></Input>
                    <Input
                        onChange={handleChange}
                        type={'text'}
                        value={values.password}
                        name="password"
                        icon={'ShowIcon'}
                        placeholder="Пароль"
                        onIconClick={onIconClick}
                    ></Input>
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
