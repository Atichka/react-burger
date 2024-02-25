import React from 'react';
import PropTypes from 'prop-types';

import css from './burgerConstructor.module.css'
import ConstructorItem from "../ConstructorItem/constructorItem";
import {CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";

export const getIngredients = state => state.ingredients;

export default function BurgerConstructor(props) {
    const dispatch = useDispatch();
    const data = useSelector(getIngredients)
        return (
            <div >
                <div className={css.box}>
                    {!data.isLoading && (data.ingredients.map(item => (
                        <ConstructorItem key={item._id}
                                         image={item.image}
                                         text={item.name}
                                         price={item.price}
                                         isLocked={false} id={item._id}/>
                    )))}
                </div>
                <div className={css.total}>
                    <div className={css.price}>
                        <p className={css.title}>{600}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button onClick={() => {
                        props.setModal(true)
                        props.setWindowFinish(true)
                    }} htmlType="button" type="primary" size="small" extraClass="ml-2">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        );
}

BurgerConstructor.propTypes = {
    text: PropTypes.string,
    price: PropTypes.number,
    isLocked: PropTypes.bool,
    setModal: PropTypes.func,
    setIngredient: PropTypes.func,
    setWindowIngredient: PropTypes.func,
    key: PropTypes.number
};
