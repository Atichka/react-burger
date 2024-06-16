import React, {useEffect} from 'react';

import css from './order-details.module.css';

import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {sendOrder} from "../../services/actions/orderAction";
import ReactLoading from "react-loading";
import {RootState} from "../../App";

export const getStuffings = (state: RootState) => state.currBurger.stuffings;
export const getBun = (state: RootState) => state.currBurger.bun;
export const getLoading = (state: RootState) => state.order.isLoading;

export default function OrderDetails(): React.JSX.Element {
    const dispatch = useDispatch();
    const stuffings = useSelector(getStuffings);
    const bun = useSelector(getBun);
    const isLoading = useSelector(getLoading);

    useEffect(() => {
        const ingredientsId = [bun, ...stuffings, bun].map(item => item.id);
        // @ts-ignore
        dispatch(sendOrder(ingredientsId));
    }, []);
    // @ts-ignore
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

