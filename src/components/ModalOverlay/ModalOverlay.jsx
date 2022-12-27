/**
 * компонент оверлея под модальным окном
 * @component
 * @returns
 * разметку оверлея с затемнением и реагированием на клик
 */

import React from "react";
import stylesModalOverlay from "../ModalOverlay/ModalOverlay.module.css";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const ModalOverlay = (props) => {
    const { id } = useParams();
    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            props.closeModal();
        }
    };

    return (
        <section className={props.isActive || id ? `${stylesModalOverlay.overlay} ${stylesModalOverlay.overlay_active}` : `${stylesModalOverlay.overlay}`} onClick={handleOverlay}>
            <div className={stylesModalOverlay.content}>{props.children}</div>
        </section>
    );
};

ModalOverlay.propTypes = {
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default ModalOverlay;
