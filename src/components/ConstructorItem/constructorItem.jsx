import React from 'react';

import constructorItem from './constructorItem.module.css'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

export default function ConstructorItem(props) {
        return (
            <div className={constructorItem.item}>
                {!props.isLoked &&
                <DragIcon type="primary" />}
                <ConstructorElement type={props.type}
                                    isLocked={props.isLoked}
                                    text={props.text}
                                    price={props.price}
                                    thumbnail={props.image}/>
            </div>
        );
}

