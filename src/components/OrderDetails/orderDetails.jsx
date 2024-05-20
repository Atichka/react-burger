import React, {useEffect} from 'react';

import css from './orderDetails.module.css';

import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {sendOrder} from "../../services/actions/orderAction";
import ReactLoading from "react-loading";

export const getStuffings = state => state.currBurger.stuffings;
export const getBun = state => state.currBurger.bun;
export const getLoading = state => state.order.isLoading;

export default function OrderDetails(props) {
    const dispatch = useDispatch();
    const stuffings = useSelector(getStuffings);
    const bun = useSelector(getBun);
    const isLoading = useSelector(getLoading);
    console.log('isLoading', isLoading);

    useEffect(() => {
        const ingredientsId = [bun, ...stuffings, bun].map(item => item.id);
        dispatch(sendOrder(ingredientsId));
    }, []);
    const {orderNumber} = useSelector(store => ({orderNumber: store.order.order}), shallowEqual);
    return (
        <div>
            {!isLoading ?
                (<div>
                        <h1 className={css.number}>{orderNumber}</h1>
                        <div className={css.checkIcon}>
                            <CheckMarkIcon type="primary" />
                        </div>
                        <div>
                            <h3 className={css.text}>Ваш заказ начали готовить</h3>
                            <p className={css.name}>Дождитесь готовности на орбитальной станции</p>
                        </div>
                </div>

                ) : (<div className={css.box}>
                    <ReactLoading type="spin" color="white"
                                  height={100} width={50} />
                </div>)
            }


        </div>
    );
}

OrderDetails.propTypes = {
    orderNumber: PropTypes.number
};

