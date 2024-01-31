import React from 'react';

import modalOverlay from './modalOverlay.module.css'
import Modal from '../Modal/modal'

export default function ModalOverlay(props) {
    return (
    <div className={modalOverlay.modal}>
        {props.ingredient &&
            <Modal setModal={props.setModal}
                   setWindowIngredient={props.setWindowIngredient}
                   ingredient={props.ingredient} />
        } else {
        <Modal setModal={props.setModal}
               windowsFinish={props.windowsFinish}
               setWindowFinish={props.setWindowsFinish}/>
    }
    </div>
    )
}

