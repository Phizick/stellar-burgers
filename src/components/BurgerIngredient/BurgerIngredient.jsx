import React from 'react';
import stylesBurgerIngredient from '../BurgerIngredient/BurgerIngredient.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const BurgerIngredient = (props) => {

    return (
        <li className={`${stylesBurgerIngredient.li} mt-6`} onClick={props.openModal}>
            <img src={props.data.image} alt={props.data.name}/>
            <p className={`${stylesBurgerIngredient.price} text text_type_digits-default mt-4 mb-4`}>
                <p className={`${stylesBurgerIngredient.priceNumber} p-2`}>{props.data.price}</p>
                <CurrencyIcon type="primary"/>
            </p>
            <p className={'text text_type_main-default'}>
                {props.data.name}
            </p>
        </li>
    )
}

export default BurgerIngredient