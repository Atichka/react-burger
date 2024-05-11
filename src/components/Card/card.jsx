import React from 'react';
import { useDrag } from 'react-dnd';

import css from './card.module.css'

import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

export const stuffings = state => state.currBurger.stuffings;
export const bun = state => state.currBurger.bun;

export default function Card(props) {
    let counter = 0;
    const mainAndSauce = useSelector(stuffings);
    const bunCount = useSelector(bun);

    if(bunCount && bunCount.id === props.id) {
        counter = 2;
    } else if(mainAndSauce) {
        counter = mainAndSauce.filter(item => item.id === props.id).length;
    }

    const [{ isDrag }, dragRef] = useDrag({
        type: "ingredient",
        item: props,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    return (
            !isDrag && (
                <li ref={dragRef} className={css.card} onClick={props.onClick}>
                    <img src={props.image} alt={'картинка ингредиента ' + props.name} />
                    <div className={css.price}>
                        <p>{props.price}</p>
                        <CurrencyIcon type="primary" />
                        {counter > 0 &&
                        <Counter count={counter} size="default"/>}
                    </div>
                    <p className={css.cardName}>{props.name}</p>
                </li>
            )
        );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    counter: PropTypes.number
};
