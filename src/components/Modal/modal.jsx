import React from 'react';

import modal from './modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import PropTypes from "prop-types";

import {buttonEsc} from "../../const";

const modalOverlayPropTypes = PropTypes.shape({
    setModal: PropTypes.bool,
    ingredient: PropTypes.array,
    setWindowIngredient: PropTypes.bool,
    windowsFinish: PropTypes.bool,
    setWindowsFinish: PropTypes.bool
});

export default function Modal(props) {
    document.addEventListener('keyup', (e) => {
        if (e.keyCode === buttonEsc) props.setModal(false);
    });
    return (
    <div className={modal.modal} onClick={() => {
        props.setModal(false)
    }}>
        <ModalOverlay data={props}/>
    </div>
    )
}

