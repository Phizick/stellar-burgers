/**
 * компонент оверлея под модальным окном
 * @component
 * @returns
 * разметку оверлея с затемнением и реагированием на клик
 */

import React from 'react';
import stylesModalOverlay from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from "prop-types";


const ModalOverlay = (props) => {

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            props.closeModal();
        }
    };

    return (
        <section className={ props.isActive ? `${stylesModalOverlay.overlay} ${stylesModalOverlay.overlay_active}` : `${stylesModalOverlay.overlay}`} onClick={handleOverlay}>
            <div className={stylesModalOverlay.content}>{props.children}</div>
        </section>
    )
};

// ModalOverlay.propTypes = {
//     closeModal: PropTypes.func.isRequired,
//     isActive: PropTypes.bool.isRequired,
//     children: PropTypes.node.isRequired
// };

export default ModalOverlay