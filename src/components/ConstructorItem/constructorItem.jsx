import React from 'react';

import constructorItem from './constructorItem.module.css'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

constructorItem.propTypes = {
    setModal: PropTypes.func.isRequired,
    setIngredient: PropTypes.func.isRequired,
    setWindowIngredient: PropTypes.func.isRequired,
    setWindowFinish: PropTypes.func.isRequired,
    isLocked: PropTypes.bool,
    type: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.string
};

export default function ConstructorItem(props) {

        return (
            <div className={constructorItem.item} onClick={() => {
                props.setModal(true);
                props.setIngredient(props);
                props.setWindowIngredient(true);
                props.setWindowFinish(false);
            }}>
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

