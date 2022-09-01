/**
 * компонент оверлея под модальным окном
 * @component
 * @returns
 * разметку оверлея с затемнением и реагированием на клик
 */

import React from 'react';
import stylesModalOverlay from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import {modalContainer} from "../../utils/constants";



const ModalOverlay = (props) => {
    return ReactDOM.createPortal(
        <section className={ props.isActive ? `${stylesModalOverlay.overlay} ${stylesModalOverlay.overlay_active}` : `${stylesModalOverlay.overlay}`}>
            <div className={stylesModalOverlay.content}>{props.children}</div>
            <div className={stylesModalOverlay.close} onClick={props.closeModal}/>
        </section>
        , modalContainer
    )
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired
};

export default ModalOverlay