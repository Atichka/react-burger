import React from 'react';

import modalOverlay from './ModalOverlay.module.css'

import IngredientDetails from '../IngredientDetails/ingredientDetails'
import OrderDetails from '../OrderDetails/orderDetails'

export default function ModalOverlay() {
    return (
        <div className={modalOverlay.content} />
    );
}
