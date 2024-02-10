import React from 'react';

import css from './orderDetails.module.css'
import close from '../../images/close.svg'

import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function OrderDetails(props) {
    return (
        <div>
                    <div className={css.buttonClose}>
                        <img src={close} alt="" className={css.close} onClick={() => {
                            props.setModal(false);
                            props.setWindowFinish(false)
                        }} />
                    </div>
                    <h1 className={css.number}>034536</h1>
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
    setModal: PropTypes.func.isRequired,
    setWindowFinish: PropTypes.func.isRequired
};

