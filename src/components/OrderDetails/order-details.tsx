import React from "react";

import css from "./order-details.module.css";

import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector} from "../../services/store";
import {getOrderNumber} from "../../services/selectors/order";
import {shallowEqual} from "react-redux";


export default function OrderDetails(): React.JSX.Element {
    const { orderNumber } = useSelector(getOrderNumber, shallowEqual);

    return (
        <div>
            <h1 className={css.number}>{orderNumber}</h1>
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
