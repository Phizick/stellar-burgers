import React from 'react';
import stylesModalOverlay from '../ModalOverlay/ModalOverlay.module.css'

const ModalOverlay = (props) => {
    return (
        <div className={stylesModalOverlay.overlay} onClick={props.closeModal}/>
    )
}

export default ModalOverlay