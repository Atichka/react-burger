import React from 'react';
import css from './register.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {Link, useNavigate} from "react-router-dom";
import {regInUser} from "../../services/actions/userAction";
import { useDispatch } from "react-redux";
import {useForm} from "../../hooks/useForm";

export function RegisterPage() {
    const navigate = useNavigate();
    const inputRef = React.useRef(null)
    const dispatch = useDispatch();
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const { values, handleChange, setValues } = useForm({
        login: "",
        name: "",
        password: "",
    });

    const sendData = (e) => {
        e.preventDefault();
        try {
            dispatch(regInUser(values.login, values.name, values.password));
            navigate("/", { replace: true });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={css.wrapper}>
            <form id="formregister" className="form" name="formregister" onSubmit={sendData}>
                <h1 className={css.heading}>Регистрация</h1>
                <div className={css.container}>
                    <Input
                        onChange={handleChange}
                        name="name"
                        type="text"
                        value={values.name}
                        placeholder="Имя"
                    ></Input>
                    <Input
                        onChange={handleChange}
                        name="login"
                        type="email"
                        value={values.login}
                        placeholder="E-mail"
                    />
                    <Input
                        onChange={handleChange}
                        name="password"
                        onIconClick={onIconClick}
                        type="password"
                        value={values.password}
                        placeholder="Пароль"
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
