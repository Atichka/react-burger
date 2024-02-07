import React from 'react';

import orderDetails from './orderDetails.module.css'
import close from '../../images/close.svg'

import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

orderDetails.propTypes = {
    setModal: PropTypes.bool,
    setWindowFinish: PropTypes.bool
};

export default function OrderDetails(props) {
    return (
        <div>
                    <div className={orderDetails.buttonClose}>
                        <img src={close} alt="" className={orderDetails.close} onClick={() => {
                            props.setModal(false);
                            props.setWindowFinish(false)
                        }} />
                    </div>
                    <h1 className={orderDetails.number}>034536</h1>
                    <p className={orderDetails.name}>Идентификатор заказа</p>
                    <div className={orderDetails.checkIcon}>
                        <CheckMarkIcon type="primary" />
                    </div>
                    <div>
                        <h3 className={orderDetails.text}>Ваш заказ начали готовить</h3>
                        <p className={orderDetails.name}>Дождитесь готовности на орбитальной станции</p>
                    </div>
                </div>
    );
}

