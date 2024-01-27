import React from 'react';

import constructorItem from './constructorItem.module.css'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

export default function ConstructorItem() {
        return (
            <div className={constructorItem.item}>
                {!this.props.isLoked &&
                <DragIcon type="primary" />}
                <ConstructorElement type={this.props.type}
                                    isLocked={this.props.isLoked}
                                    text={this.props.text}
                                    price={this.props.price}
                                    thumbnail={this.props.image}/>
            </div>
        );
}

