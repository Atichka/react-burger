import React from 'react';
import css from './modal-overlay.module.css'
import {TModalOverlay} from "../../utils/types";

export default function ModalOverlay(props: TModalOverlay): React.JSX.Element {
    return (
        <div className={css.content} onClick={props.onClose}/>
    );
}

