/**
 * компонент модального окна. Общий
 * @component
 * @returns
 * общую разметку для всех модальных окон
 */

import React, { useEffect } from "react";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import stylesModal from "../Modal/Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { modalContainer } from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {MODAL_CLOSED} from "../../services/actions";
import {useHistory, useLocation} from "react-router-dom";


const Modal = (props) => {

    const { isOpened } = useSelector(state => state.modalState);
    console.log(isOpened)
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation()

    const handleCloseModal = () => {
        dispatch({
            type: MODAL_CLOSED,
            payload: {
                isOpened: false,
                modalType: ''
            }
        })
        if (location.pathname.indexOf('/feed') !== -1) {
            history.push('/feed')
        } else {
            history.push('/')
        }
    }



    useEffect(() => {
        const handleEscClose = (e) => {
            e.key === "Escape" && handleCloseModal();

        };
        if (isOpened) {
            document.addEventListener("keydown", handleEscClose);
        }
        return () => {
            document.removeEventListener("keydown", handleEscClose);
        };
    }, [isOpened]);



    return ReactDOM.createPortal(
        <ModalOverlay closeModal={handleCloseModal} isActive={isOpened}>
            <div className={`${stylesModal.modal} pt-10 pb-10 pl-10 pr-10`}>
                <div className={`${stylesModal.header}`}>
                    {props.title && <h3 className={`text text_type_main-large`}>{props.title}</h3>}
                    <div className={stylesModal.closeIcon} onClick={handleCloseModal}>
                        <CloseIcon type={"primary"} />
                    </div>
                </div>
                <div className={`${stylesModal.container}`}>{props.children}</div>
            </div>
        </ModalOverlay>,
        modalContainer
    );
};

Modal.defaultProps = {
    title: "",
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
