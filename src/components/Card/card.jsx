import React from 'react';

import card from './card.module.css'

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

const cardPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    counter: PropTypes.number
});

function Card(props) {
        return (
            <div className={card.card}>
                <img src={props.image} alt={'картинка ингредиента ' + props.name} />
                <div className={card.price}>
                    <p>{props.price}</p>
                    <CurrencyIcon type="primary" />
                    {props.counter > 0 &&
                    <p className={card.counter}>{props.counter}</p>}
                </div>
                <p className={card.cardName}>{props.name}</p>
            </div>
        );
}

export default Card;
