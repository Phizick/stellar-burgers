/**
 * компонент модального окна. Общий
 * @component
 * @returns
 * общую разметку для всех модальных окон
 */

import React, { useEffect, FC} from "react";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import stylesModal from "../Modal/Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {TModal} from "../../services/types";
import ReactDOM from "react-dom";
import {getModalState, modalContainer} from "../../utils/constants";
import {useDispatch, useSelector} from "../../services/hooks/hooks";
import {MODAL_CLOSED} from "../../services/actions/actionsTypes/modalTypes";
import { useHistory, useLocation } from "react-router-dom";
import { SEND_ORDER } from "../../services/actions/actionsTypes/orderTypes";

const Modal: FC<TModal>  = (props) => {
    const { isOpened, modalType} = useSelector(getModalState);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const handleCloseModal = () => {
        dispatch({
            type: MODAL_CLOSED,
            payload: {
                isOpened: false,
                modalType: "",
            },
        });
        dispatch({
            type: SEND_ORDER,
            payload: {
                isLoad: false,
            },
        });
        redirectClosedModal()

    };

    const redirectClosedModal = () => {
        if (location.pathname.indexOf("/feed") !== -1) {
            history.push("/feed");
        } else if (location.pathname.indexOf("/profile") !== -1) {
            history.push("/profile/orders");
        } else {
            history.push("/");
        }
    };


    useEffect(() => {
        const handleEscClose = (e: any) => {
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
                <div className={modalType === 'orderModal' ?  `${stylesModal.orderHeader}`: `${stylesModal.header}`}>
                    {props.title && <h3 className={`text text_type_main-large`}>{props.title}</h3>}
                    <div className={stylesModal.closeIcon} onClick={handleCloseModal}>
                        <CloseIcon type={"primary"} />
                    </div>
                </div>
                <div className={modalType === 'orderModal' ?  `${stylesModal.orderContainer}`: `${stylesModal.container}`}>{props.children}</div>
            </div>
        </ModalOverlay>,
        modalContainer
    );
};



export default Modal;
