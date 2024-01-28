import React from 'react';

import modal from './modal.module.css'
import close from '../../images/close.svg'

export default function Modal(props) {
    return (
            <div className={modal.content} >
                <h1 className={modal.title}>Детали ингредиента</h1>
                <img src={close} alt="" className={modal.close} onClick={() => props.setModal(false)}/>
            </div>
    );
}

