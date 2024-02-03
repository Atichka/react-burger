import React from 'react';

import modalOverlay from './ModalOverlay.module.css'

import IngredientDetails from '../IngredientDetails/ingredientDetails'
import OrderDetails from '../OrderDetails/orderDetails'

export default function ModalOverlay(props) {
    return (
        <div className={modalOverlay.content}>
            {props.data.ingredient &&
                <IngredientDetails setModal={props.data.setModal}
                                   setWindowIngredient={props.data.setWindowIngredient}
                                   ingredient={props.data.ingredient} />
            }
            {props.data.windowsFinish &&
                <OrderDetails setModal={props.data.setModal}
                              windowsFinish={props.data.windowsFinish}
                              setWindowFinish={props.data.setWindowsFinish}/>
            }
        </div>
    );
}
