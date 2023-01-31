/**
 * компонент оверлея под модальным окном
 * @component
 * @returns
 * разметку оверлея с затемнением и реагированием на клик
 */

import React, { FC, MouseEvent } from "react";
import stylesModalOverlay from "../ModalOverlay/ModalOverlay.module.css";
import { useParams } from "react-router-dom";
import {TModalOverlay} from "../../services/types/types";

const ModalOverlay: FC<TModalOverlay> = (props) => {
    const { id } = useParams<{id:string}>();
    const handleOverlay = (e: MouseEvent<HTMLElement>) => {
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


export default ModalOverlay;
