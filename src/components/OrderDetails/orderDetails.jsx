import React, {useEffect} from 'react';

import css from './orderDetails.module.css';

import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {sendOrder} from "../../services/actions/orderAction";

export const getStuffings = state => state.currBurger.stuffings;
export const getBun = state => state.currBurger.bun;

export default function OrderDetails(props) {
    const dispatch = useDispatch();
    const stuffings = useSelector(getStuffings);
    const bun = useSelector(getBun);
    const ingredientsId = [bun, ...stuffings, bun].map(item => item.id);

    useEffect(() => {
        dispatch(sendOrder(ingredientsId));
    }, []);
    const {orderNumber} = useSelector(store => ({orderNumber: store.order.order}), shallowEqual);
    console.log('orderNumber', orderNumber);
    return (
        <div>
                    <h1 className={css.number}>{orderNumber}</h1>
                    <p className={css.name}>Идентификатор заказа</p>
                    <div className={css.checkIcon}>
                        <CheckMarkIcon type="primary" />
                    </div>
                    <div>
                        <h3 className={css.text}>Ваш заказ начали готовить</h3>
                        <p className={css.name}>Дождитесь готовности на орбитальной станции</p>
                    </div>
                </div>
    );
}

OrderDetails.propTypes = {
    orderNumber: PropTypes.number
};

