import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import stylesModal from '../Modal/Modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

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
            <ModalOverlay closeModal={props.closeModal}/>
            <div className={`${stylesModal.overlay}`}>
                <div className={stylesModal.header}>
                    {
                        props.target !== 'BUTTON'
                        ? <h3 className={''}>Детали ингредиента</h3>
                        : <h3 className={''}></h3>
                    }
                    <CloseIcon type={'primary'} onClick={props.closeModal} className={stylesModal.closeIcon}/>
                </div>

                {
                    props.target === 'BUTTON'
                        ? <OrderDetails />
                        : <IngredientDetails selectedElement={props.selectedElement}/>
                }

            </div>
        </>,
        document.getElementById('modal-root')
    )
}

export default Modal