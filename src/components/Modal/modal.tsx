import React, {FC, useCallback, useEffect} from 'react';
import css from './modal.module.css'
import ModalOverlay from '../ModalOverlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ReactDOM from "react-dom";
import {TModal} from "../../utils/types";

function Modal({onClose, children, title}: TModal): React.JSX.Element {
    const onDel = () => {
        onClose();
    }

    const modalRoot = document.querySelector('#modal')

    const closeEsc = useCallback((e: KeyboardEvent) => {
        e.key === "Escape" && onClose();
    }, [onClose]);

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

            <ModalOverlay onClose={onClose}/>
            {children}
        </div>,
        modalRoot as HTMLElement
    );

};

export default Modal;

