import React from 'react';
import css from './user-profile.module.css';
import {Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "../../services/actions/userAction";
import { getUser } from '../../services/selectors/user';

export const UserProfile = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const data = useSelector(getUser)!;

    const [name, setName] = React.useState(data.name)
    const [email, setEmail] = React.useState(data.email)
    const [password, setPassword] = React.useState('')
    const inputRef = React.useRef(null)
    const onClickReset = () => {
        setName(data.name);
        setEmail(data.email);
        setPassword('');
    };
    const onClickSave = () => {
        // @ts-ignore
        dispatch(setUserData(email, name, password));
    }
    return (
        <div className={css.container}>
            <Input
                onPointerEnterCapture={((event: PointerEvent): void => {})}
                onPointerLeaveCapture={((event: PointerEvent): void => {})}
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setName(e.target.value)}
                icon={'EditIcon'}
                value={name}
                name={'name'}
                error={false}
                ref={inputRef}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="ml-1"
            />
            <Input
                onPointerEnterCapture={((event: PointerEvent): void => {})}
                onPointerLeaveCapture={((event: PointerEvent): void => {})}
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
                onPointerEnterCapture={((event: PointerEvent): void => {})}
                onPointerLeaveCapture={((event: PointerEvent): void => {})}
                type={'text'}
                placeholder={'Введите новый пароль'}
                onChange={e => setPassword(e.target.value)}
                icon={'EditIcon'}
                value={password}
                name={'name'}
                error={false}
                ref={inputRef}
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
