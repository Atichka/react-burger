import React from 'react';

import card from './card.module.css'

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

class Card extends React.Component {
    render() {
        return (
            <div className={card.card}>
                <img src={this.props.image} alt='картинка ингредиента' />
                <div className={card.price}>
                    <p>{this.props.price}</p>
                    <CurrencyIcon type="primary" />
                    {this.props.counter > 0 &&
                    <p className={card.counter}>{this.props.counter}</p>}
                </div>
                <p className={card.cardName}>{this.props.name}</p>
            </div>
        );
    }
}

export default Card;
