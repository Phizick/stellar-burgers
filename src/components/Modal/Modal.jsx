/**
 * компонент модального окна. Общий
 * @component
 * @returns
 * общую разметку для всех модальных окон
 */

import React, {useEffect} from 'react';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import stylesModal from '../Modal/Modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import {modalContainer} from "../../utils/constants";


const Modal = (props) => {

    const isModalOpen = props.activeModal;

    useEffect(() => {
        const handleEscClose = (e) => {
            e.key === 'Escape' && props.closeModal();
        };
        if (isModalOpen) {
            document.addEventListener('keydown', handleEscClose);
        }
        return () => {
            document.removeEventListener('keydown', handleEscClose)
        };
    }, [isModalOpen]);

    return ReactDOM.createPortal (
        <ModalOverlay closeModal={props.closeModal} isActive={props.activeModal}>
            <div className={`${stylesModal.modal} pt-10 pb-10 pl-10 pr-10`}>
                <div className={`${stylesModal.header}`}>
                    {
                        props.title
                        && <h3 className={`text text_type_main-large`}>{props.title}</h3>
                    }
                    <div className={stylesModal.closeIcon} onClick={props.closeModal}>
                        <CloseIcon type={'primary'}/>
                    </div>
                </div>
                <div className={`${stylesModal.container}`}>
                    {props.children}
                </div>
            </div>
        </ModalOverlay>
        , modalContainer
    )
};

Modal.defaultProps = {
    title: ''
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    activeModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default Modal