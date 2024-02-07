import React, {useEffect} from 'react';
import modal from './modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import PropTypes from "prop-types";

import ReactDOM from "react-dom";

modal.propTypes = {
    setModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default function Modal({setModal, isModal, children}) {
    const modalRoot = document.querySelector('#modal')

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            if (e.key === "Escape") setModal(false);
        });

        return () => {};
    });
    return ReactDOM.createPortal(
        <div className={modal.modal} onClick={isModal}>
            <ModalOverlay />
            {children}
        </div>,
            modalRoot
    );

}

