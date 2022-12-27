/**
 * компонент деталей заказа. содержит информацию о заказе.
 * @component
 * @returns
 * разметку деталей заказа для отображения в модальном окне
 */

import React from "react";
import doneIndicationImg from "../../images/done.png";
import stylesOrderDetails from "../OrderDetails/OrderDetails.module.css";
import { useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";

const OrderDetails = () => {
    const { order, isLoad } = useSelector((state) => state.order);

    return (
        <>
            <div className={`${stylesOrderDetails.container} pb-20`}>
                {isLoad ? <p className={`${stylesOrderDetails.title} text text_type_digits-large`}>{order}</p> : <InfinitySpin width="200" color="#4c4cff" />}
                <p className={`text text_type_main-medium pt-8 pb-15`}>идентификатор заказа</p>
                <img className={stylesOrderDetails.image} src={doneIndicationImg} alt={"finished"} />
                <p className={`text text_type_main-default pt-15 pb-2`}>Ваш заказ начали готовить</p>
                <p className={`text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
            </div>
        </>
    );
};

export default OrderDetails;
