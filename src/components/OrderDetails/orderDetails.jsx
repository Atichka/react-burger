import React from 'react';

import css from './orderDetails.module.css';

import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function OrderDetails(props) {
    return (
        <div>
                    <h1 className={css.number}>{props.orderNumber}</h1>
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

