import React from 'react';

import constructorItem from './constructorItem.module.css'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

class ConstructorItem extends React.Component {
    render() {
        return (
            <div className={constructorItem.item}>
                {!this.props.isLoked &&
                <DragIcon type="primary" />}
                <ConstructorElement type="top"
                                    isLocked={this.props.isLoked}
                                    text={this.props.text}
                                    price={this.props.price}
                                    thumbnail={this.props.image}/>
            </div>
        );
    }
}

export default ConstructorItem;
