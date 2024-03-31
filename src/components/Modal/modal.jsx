import React, {useCallback, useEffect} from 'react';
import css from './modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import PropTypes from "prop-types";

import ReactDOM from "react-dom";
import close from "../../images/close.svg";
// import {REMOVE_INGREDIENT} from "../../services/actions/detailsAction";

export default function Modal({onClose, setModal, windowIngredient, children}) {
    const onDel = () => {
        onClose();
        setModal(false);
    }

    const modalRoot = document.querySelector('#modal')

    const closeEsc = useCallback((e) => {
        e.key === "Escape" && setModal(false)
        onClose();
    }, [setModal]);

    useEffect(() => {
        document.addEventListener('keydown', closeEsc);

        return () =>  {
            document.removeEventListener('keydown', closeEsc)
        }
    });
    return ReactDOM.createPortal(
        <div className={css.modal}>
            {windowIngredient ? <div className={css.header}>
                <h1 className={css.title}>Детали ингредиента</h1>
                <div className={css.buttonClose}>
                    <img src={close} alt="Закрыть" className={css.close} onClick = { onDel }/>
                </div>
            </div> :
            <div className={css.buttonClose}>
                <img src={close} alt="Закрыть" className={css.close} onClick={onDel} />
            </div>}

            <ModalOverlay setModal={() => {
                setModal(false)
            }}/>
            {children}
        </div>,
            modalRoot
    );

}

Modal.propTypes = {
    setModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

