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
        <section className={ props.isActive ? `${stylesModalOverlay.overlay} ${stylesModalOverlay.overlay_active}` : `${stylesModalOverlay.overlay}`} onClick={props.closeModal}>
            <div className={stylesModalOverlay.content}>{props.children}</div>
        </section>
        , modalContainer
    )
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

export default ModalOverlay