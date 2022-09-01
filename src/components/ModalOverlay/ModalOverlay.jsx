import React from 'react';
import stylesModalOverlay from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from "prop-types";

const ModalOverlay = (props) => {
    return (
        <div className={stylesModalOverlay.overlay} onClick={props.closeModal}/>
    )
};

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired
};

export default ModalOverlay