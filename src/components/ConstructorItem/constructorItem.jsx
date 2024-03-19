import React from 'react';

import css from './constructorItem.module.css'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

export default function ConstructorItem(props) {

        return (
            <div className={css.item}>
                {!props.isLocked &&
                <DragIcon type="primary" />}
                {props.type === "top" || props.type === "bottom" ? (
                    <ConstructorElement isLocked={true}
                                        text={props.text}
                                        price={props.price}
                                        thumbnail={props.image}/>
                    ) : (
                    <ConstructorElement text={props.text}
                                        price={props.price}
                                        thumbnail={props.image}
                                        handleClose={() =>
                                            props.deleteIngredient(props.id)}/>)
                }
            </div>
        );
}

ConstructorItem.propTypes = {
    setModal: PropTypes.func,
    setIngredient: PropTypes.func,
    setWindowIngredient: PropTypes.func,
    setWindowFinish: PropTypes.func,
    isLocked: PropTypes.bool,
    text: PropTypes.string,
    price: PropTypes.number
};

