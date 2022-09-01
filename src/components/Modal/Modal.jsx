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
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import {modalContainer} from "../../utils/constants";
import PropTypes from "prop-types";


const Modal = (props) => {
    const handleEscClose = (e) => {
        (e.keyCode === 27) && props.handleOpenState()
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose)
        }
    }, []);

    return ReactDOM.createPortal(
        <>
            <div className={props.activeModal ? `${stylesModal.overlay} ${stylesModal.enable} pt-10 pr-10 pl-10 pb-15` : `${stylesModal.overlay} pt-10 pr-10 pl-10 pb-15`}>
                {props.target !== 'BUTTON'
                    ? <div className={stylesModal.header}>
                        <h3 className={`text text_type_main-large`}>Детали ингредиента</h3>
                        <div className={stylesModal.closeIcon} onClick={props.closeModal}>
                            <CloseIcon type={'primary'}/>
                        </div>
                    </div>
                    : <div className={stylesModal.header}>
                        <div className={`${stylesModal.closeIcon} ${stylesModal.closeIcon_withoutContent}`} onClick={props.closeModal}>
                            <CloseIcon type={'primary'}/>
                        </div>
                    </div>
                }
                {props.target === 'BUTTON'
                    ? <OrderDetails />
                    : <IngredientDetails selectedElement={props.selectedElement}/>
                }
            </div>
            <ModalOverlay closeModal={props.closeModal}/>
        </>,
        modalContainer
    )
};

Modal.propTypes = {
    handleOpenState: PropTypes.func.isRequired,
    activeModal: PropTypes.bool.isRequired,
    target: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    selectedElement: PropTypes.object.isRequired
};

export default Modal