import React from 'react';

import card from './card.module.css'

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function Card(props) {
        return (
            <div className={card.card}>
                <img src={props.image} alt='картинка ингредиента' />
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
