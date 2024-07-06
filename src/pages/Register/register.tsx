import React from 'react';
import css from './register.module.css';
import {Input, Button, EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Link, useNavigate} from "react-router-dom";
import {regInUser} from "../../services/actions/userAction";
import { useDispatch } from "../../services/store";
import {useForm} from "../../hooks/useForm";

type RegisterFormData = {
    login: string;
    name: string;
    password: string;
}

export function RegisterPage(): React.JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { values, handleChange } = useForm<RegisterFormData>({
        login: "",
        name: "",
        password: "",
    });

    const sendData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // @ts-ignore
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
                        onPointerEnterCapture={((event: PointerEvent): void => {})}
                        onPointerLeaveCapture={((event: PointerEvent): void => {})}
                        placeholder={"Имя"}
                        onChange={handleChange}
                        type={"text"}
                        value={values.name}
                        name={"name"}
                        size={"default"}
                    />
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
