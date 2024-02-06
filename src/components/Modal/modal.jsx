import React from 'react';
import modal from './modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import PropTypes from "prop-types";


import ReactDOM from "react-dom";
import {buttonEsc} from "../../const";

modalOverlay.propTypes = PropTypes.shape( {
    setModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
});

export default function Modal({setModal, children}) {
    const modalRoot = document.querySelector('#modal')

    document.addEventListener('keyup', (e) => {
        if (e.keyCode === buttonEsc) setModal(false);
    });
    return ReactDOM.createPortal(
        <div className={modal.modal} onClick={setModal}>
            <ModalOverlay />
            {children}
        </div>,
            modalRoot
    );

}

