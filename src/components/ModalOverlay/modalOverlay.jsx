import React from 'react';

import modalOverlay from './modalOverlay.module.css'
import IngredientDetails from '../IngredientDetails/ingredientDetails'
import OrderDetails from '../OrderDetails/orderDetails'

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

