import React from 'react';
import stylesBurgerIngredient from '../BurgerIngredient/BurgerIngredient.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const BurgerIngredient = ({ingredient}) => {
    return (
        <li className={`${stylesBurgerIngredient.li} mt-6`}>
            <img src={ingredient.image} alt={ingredient.name}/>
            <p className={`${stylesBurgerIngredient.price} text text_type_digits-default mt-4 mb-4`}>
                <p className={`${stylesBurgerIngredient.pricenumber} p-2`}>{ingredient.price}</p>
                <CurrencyIcon type="primary"/>
            </p>
            <p className={'text text_type_main-default'}>
                {ingredient.name}
            </p>
        </li>
    )
}

export default BurgerIngredient