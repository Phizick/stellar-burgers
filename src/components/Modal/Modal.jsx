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
            <div className={`${stylesModal.overlay} pt-10 pr-10 pl-10 pb-10`}>
                <CloseIcon type={'primary'} onClick={props.closeModal} className={stylesModal.closeIcon}/>
                <div className={stylesModal.header}>
                </div>
                {props.target === 'BUTTON'
                    ? <OrderDetails />
                    : <IngredientDetails selectedElement={props.selectedElement}/>

                }
            </div>
        </>,
        document.getElementById('modal-root')
    )
}

export default Modal