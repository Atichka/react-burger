import React, {useCallback, useEffect} from 'react';
import modal from './modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import PropTypes from "prop-types";

import ReactDOM from "react-dom";

export default function Modal({setModal, children}) {
    const modalRoot = document.querySelector('#modal')

    const closeEsc = useCallback((e) => {
        e.key === "Escape" && setModal(false)
    }, [setModal]);

    useEffect(() => {
        document.addEventListener('keydown', closeEsc);

        return () =>  {
            document.removeEventListener('keydown', closeEsc)
        }
    });
    return ReactDOM.createPortal(
        <div className={modal.modal}>
            <ModalOverlay setModal={() => {
                setModal(false)
            }}/>
            {children}
        </div>,
            modalRoot
    );

}

modal.propTypes = {
    setModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

