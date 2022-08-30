import React from 'react';
import doneImg from '../../images/done.png';

const OrderDetails = () => {
    return (
        <section className={''}>
            <p className={''}>034536</p>
            <p className={''}>идентефикатор заказа</p>
            <img className={''} src={doneImg} alt={'finished'}/>
            <p className={''}>Ваш заказ начали готовить</p>
            <p className={''}>Дождитесь готовности на орбитальной станции</p>
        </section>

    )
}

export default OrderDetails