import React, {useCallback, useEffect} from 'react';
import css from './modal.module.css'
import ModalOverlay from '../ModalOverlay/modal-overlay'
import PropTypes from "prop-types";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ReactDOM from "react-dom";

export default function Modal({onClose, children, title}) {
    const onDel = () => {
        onClose();
    }

    const modalRoot = document.querySelector('#modal')

    const closeEsc = useCallback((e) => {
        if(e.key === "Escape") {
            onClose();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', closeEsc);

        return () =>  {
            document.removeEventListener('keydown', closeEsc)
        }
    });
    return ReactDOM.createPortal(
        <div className={css.modal}>
            <div className={css.header}>
                <h1 className={css.title}>{title}</h1>
                <div className={css.buttonClose}>
                    <CloseIcon type="primary" onClick = { onDel } />
                </div>
            </div>

            <ModalOverlay />
            {children}
        </div>,
            modalRoot
    );

}

Modal.propTypes = {
    children: PropTypes.node.isRequired
};

