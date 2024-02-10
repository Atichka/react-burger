import React from 'react';

import css from './constructorItem.module.css'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

export default function ConstructorItem(props) {

        return (
            <div className={css.item}>
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

ConstructorItem.propTypes = {
    setModal: PropTypes.func,
    setIngredient: PropTypes.func,
    setWindowIngredient: PropTypes.func,
    setWindowFinish: PropTypes.func,
    isLocked: PropTypes.bool,
    type: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.number
};

