import React from 'react';

import css from './card.module.css'

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

export default function Card(props) {
        return (
            <div className={css.card} onClick={() => {
                props.setModal(true);
                props.setIngredient(props);
                props.setWindowIngredient(true);
                props.setWindowFinish(false);
            }}>
                <img src={props.image} alt={'картинка ингредиента ' + props.name} />
                <div className={css.price}>
                    <p>{props.price}</p>
                    <CurrencyIcon type="primary" />
                    {props.counter > 0 &&
                    <p className={css.counter}>{props.counter}</p>}
                </div>
                <p className={css.cardName}>{props.name}</p>
            </div>
        );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    counter: PropTypes.number
};
