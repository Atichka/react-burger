import React from 'react';
import { useDrag } from 'react-dnd';

import css from './card.module.css'

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

export default function Card(props) {
    const [{ isDrag }, dragRef] = useDrag({
        type: "ingredient",
        item: props,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
        return (
            !isDrag && (
                <div ref={dragRef} className={css.card} onClick={props.onClick}>
                    <img src={props.image} alt={'картинка ингредиента ' + props.name} />
                    <div className={css.price}>
                        <p>{props.price}</p>
                        <CurrencyIcon type="primary" />
                        {props.counter > 0 &&
                        <p className={css.counter}>{props.counter}</p>}
                    </div>
                    <p className={css.cardName}>{props.name}</p>
                </div>
            )
        );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    counter: PropTypes.number
};
