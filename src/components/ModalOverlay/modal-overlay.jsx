import React from 'react';
import PropTypes from "prop-types";

import css from './modal-overlay.module.css'

export default function ModalOverlay(props) {
    return (
        <div className={css.content} onClick={props.onClose}/>
    );
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
};
