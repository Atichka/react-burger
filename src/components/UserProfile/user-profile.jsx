import React from 'react';
import css from './user-profile.module.css';
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "../../services/actions/userAction";

export const getUser = state => state.userData.user;

export const UserProfile = () => {
    const dispatch = useDispatch();
    const data = useSelector(getUser);

    const [name, setName] = React.useState(data.name)
    const [email, setEmail] = React.useState(data.email)
    const [password, setPassword] = React.useState('')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    const onClickReset = () => {
        setName(data.name);
        setEmail(data.email);
        setPassword('');
    };
    const onClickSave = () => {
        dispatch(setUserData(email, name, password));
    }
    return (
            <div className={css.container}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    icon={'EditIcon'}
                    value={name}
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
                    placeholder={'E-mail'}
                    onChange={e => setEmail(e.target.value)}
                    icon={'EditIcon'}
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
                    placeholder={'Введите новый пароль'}
                    onChange={e => setPassword(e.target.value)}
                    icon={'EditIcon'}
                    value={password}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="ml-1"
                />
                <div>
                    <Button
                        extraClass="mt-2"
                        htmlType="button"
                        type="primary"
                        size="medium"
                        onClick={onClickReset}
                    >
                        Отменить
                    </Button>
                    <Button
                        extraClass="mt-4"
                        htmlType="submit"
                        type="primary"
                        size="medium"
                        onClick={onClickSave}
                    >
                        Сохранить
                    </Button>
                </div>
            </div>
    );
}
