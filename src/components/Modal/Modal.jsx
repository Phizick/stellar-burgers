/**
 * компонент модального окна. Общий
 * @component
 * @returns
 * общую разметку для всех модальных окон, для отображения конкретного содержимого используются два дочерних компонента IngredientDetails / OrderDetails и тернарный оператор
 */

import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import stylesModal from '../Modal/Modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";


import PropTypes from "prop-types";
import {ingredientType} from "../../utils/type";


const Modal = (props) => {

    useEffect(() => {
        const handleEscClose = (e) => {
            (e.keyCode === 'Escape') && props.closeModal()
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
                        ? <div className={stylesModal.header} pt-10>
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

// Modal.propTypes = {
//     handleOpenState: PropTypes.func.isRequired,
//     activeModal: PropTypes.bool.isRequired,
//     target: PropTypes.string.isRequired,
//     closeModal: PropTypes.func.isRequired,
//     selectedElement: ingredientType.isRequired
// };

export default Modal