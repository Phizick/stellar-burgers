import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import stylesModal from '../Modal/Modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../IngredientDetails/IngredientDetails";


const Modal = (props) => {
    console.log(props)

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

                    <CloseIcon type={'primary'} onClick={props.closeModal} className={stylesModal.closeIcon}/>
                </div>

                <IngredientDetails selectedElement={props.selectedElement}/>


            </div>
        </>,
        document.getElementById('modal-root')
    )
}

export default Modal