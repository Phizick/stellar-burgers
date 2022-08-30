import React from 'react';

const Modal = (props) => {

    const handleEscClose = (e) => {
        (e.keyCode === 27) && props.handleOpenState()
    }
}

export default Modal