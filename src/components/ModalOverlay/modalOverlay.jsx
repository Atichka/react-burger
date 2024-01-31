import React from 'react';

import modalOverlay from './modalOverlay.module.css'
import IngredientDetails from '../IngredientDetails/ingredientDetails'
import OrderDetails from '../OrderDetails/orderDetails'
import PropTypes from "prop-types";

const modalOverlayPropTypes = PropTypes.shape({
    setModal: PropTypes.bool,
    ingredient: PropTypes.array,
    setWindowIngredient: PropTypes.bool,
    windowsFinish: PropTypes.bool,
    setWindowsFinish: PropTypes.bool
});

export default function ModalOverlay(props) {
    return (
    <div className={modalOverlay.modal} onClick={() => {
        props.setModal(false)
    }}>
        {props.ingredient &&
            <IngredientDetails setModal={props.setModal}
                               setWindowIngredient={props.setWindowIngredient}
                               ingredient={props.ingredient} />
        }
        {props.windowsFinish &&
            <OrderDetails setModal={props.setModal}
                          windowsFinish={props.windowsFinish}
                          setWindowFinish={props.setWindowsFinish}/>
        }
    </div>
    )
}

