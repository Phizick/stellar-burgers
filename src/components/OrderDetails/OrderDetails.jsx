import React from 'react';
import doneIndicationImg from '../../images/done.png';
import stylesOrderDetails from '../OrderDetails/OrderDetails.module.css'

const OrderDetails = () => {
    return (
        <section className={`${stylesOrderDetails.container}`}>
            <p className={`${stylesOrderDetails.title} text text_type_digits-large`}>034536</p>
            <p className={`text text_type_main-medium pt-8 pb-15`}>идентификатор заказа</p>
            <img className={stylesOrderDetails.image} src={doneIndicationImg} alt={'finished'}/>
            <p className={`text text_type_main-default pt-15 pb-2`}>Ваш заказ начали готовить</p>
            <p className={`text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
        </section>
    )
};

export default OrderDetails