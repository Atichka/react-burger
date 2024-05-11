import React from 'react';
import css from './register.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {Link, useNavigate} from "react-router-dom";
import {regInUser} from "../../services/actions/userAction";
import { useDispatch } from "react-redux";

export function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const inputRef = React.useRef(null)
    const dispatch = useDispatch();
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const sendData = async (e) => {
        e.preventDefault();
        try {
            dispatch(regInUser(email, name, password));
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
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setName(e.target.value)}
                        value={name}
                        name={'name'}
                        error={false}
                        ref={inputRef}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
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
                    <Input
                        type={'text'}
                        placeholder={'Пароль'}
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
