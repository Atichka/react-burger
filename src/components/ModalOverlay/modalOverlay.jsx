import React from 'react';

import modalOverlay from './modalOverlay.module.css'
import Modal from '../Modal/modal'

export default function ModalOverlay(props) {
    return (
        <div className={modalOverlay.modal}>
            <Modal setModal={props.setModal} ingredient={props.ingredient}/>
        </div>
    );
}

