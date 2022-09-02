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

const Modal = (props) => {

    useEffect(() => {
        const handleEscClose = (e) => {
            (e.key === 'Escape') && props.closeModal()
        }
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose)
        }
    }, []);

    return (
        <ModalOverlay closeModal={props.closeModal} isActive={props.activeModal}>
            <div className={`${stylesModal.modal} pt-10 pb-10 pl-10 pr-10`}>
                {
                    props.title
                        ? <div className={`${stylesModal.header}`}>
                            <h3 className={`text text_type_main-large`}>{props.title}</h3>
                            <div className={stylesModal.closeIcon} onClick={props.handleModalState}>
                                <CloseIcon type={'primary'}/>
                            </div>
                        </div>
                        : <div className={stylesModal.header}>
                            <div className={`${stylesModal.closeIcon} ${stylesModal.closeIcon_withoutContent}`} onClick={props.handleModalState}>
                                <CloseIcon type={'primary'}/>
                            </div>
                        </div>
                }
                <div className={`${stylesModal.container}`}>
                    {props.children}
                </div>
            </div>
        </ModalOverlay>
    )
};

Modal.defaultProps = {
    title: ''
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    handleModalState: PropTypes.func.isRequired,
    activeModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default Modal