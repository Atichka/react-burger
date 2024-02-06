import React from 'react';
import modal from './modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import PropTypes from "prop-types";


import ReactDOM from "react-dom";
import {buttonEsc} from "../../const";

const modalOverlayPropTypes = PropTypes.shape({
    setModal: PropTypes.bool,
    ingredient: PropTypes.array,
    setWindowIngredient: PropTypes.bool,
    windowsFinish: PropTypes.bool,
    setWindowsFinish: PropTypes.bool
});

export default function Modal({onClick, children}) {
    const modalRoot = document.querySelector('#modal')

    document.addEventListener('keyup', (e) => {
        if (e.keyCode === buttonEsc) children.props.setModal(false);
    });
    return ReactDOM.createPortal(
        <div className={modal.modal} onClick={onClick}>
            <ModalOverlay />
            {children}
        </div>,
            modalRoot
    );

}

