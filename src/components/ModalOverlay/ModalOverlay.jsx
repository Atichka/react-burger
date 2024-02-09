import React from 'react';

import css from './ModalOverlay.module.css'

export default function ModalOverlay(props) {
    return (
        <div className={css.content} onClick={props.setModal}/>
    );
}
