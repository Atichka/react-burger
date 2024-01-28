import React, {useState} from 'react';

import constructorItem from './constructorItem.module.css'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

export default function ConstructorItem(props) {

        return (
            <div className={constructorItem.item} onClick={() => props.setModal(true)}>
                {!props.isLocked &&
                <DragIcon type="primary" />}
                <ConstructorElement type={props.type}
                                    isLocked={props.isLocked}
                                    text={props.text}
                                    price={props.price}
                                    thumbnail={props.image}/>
            </div>
        );
}

