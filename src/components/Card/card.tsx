import React from 'react';
import { useDrag } from 'react-dnd';

import css from './card.module.css'

import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {TCard} from "../../utils/types";
import { getBun, getStuffings } from '../../services/selectors/constructor';
import { useSelector } from '../../services/store';

export default function Card(props: TCard): React.JSX.Element {
    let counter = 0;
    const mainAndSauce = useSelector(getStuffings);
    const bunCount = useSelector(getBun);

    if(bunCount && bunCount.id === props.id) {
        counter = 2;
    } else if(mainAndSauce) {
        counter = mainAndSauce.filter((item) => item.id === props.id).length;
    }

    const [{ isDrag }, dragRef] = useDrag({
        type: "ingredient",
        item: props,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    return (
        !isDrag ? (
            <div ref={dragRef} className={css.card}>
                <img src={props.image} alt={'картинка ингредиента ' + props.name} />
                <div className={css.price}>
                    <p>{props.price}</p>
                    <CurrencyIcon type="primary" />
                    {counter > 0 &&
                        <Counter count={counter} size="default" />}
                </div>
                <p className={css.cardName}>{props.name}</p>
            </div>
        ) : <></>
    );
};
