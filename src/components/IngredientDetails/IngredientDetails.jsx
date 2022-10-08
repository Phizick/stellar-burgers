/**
 * компонент информации об ингредиенте для отображения в модальном окне
 * @component
 * @returns
 * разметку информации об ингредиенте
 */


import React from 'react'
import stylesIngredientDetails from '../IngredientDetails/IngredientDetails.module.css'

import {useSelector} from "react-redux";

const IngredientDetails = () => {
    const ingredient = useSelector(state => state.ingredient.ingredient)
    return (
        <section className={stylesIngredientDetails.container}>
            <img src={ingredient.image_large} alt={ingredient.name}/>
            <p className={`${stylesIngredientDetails.title} text text_type_main-medium pt-4 pb-8`}>{ingredient.name}</p>
            <ul className={`${stylesIngredientDetails.ingredientDetails}`}>
                <li className={stylesIngredientDetails.listItem}>
                    <p className={`text text_type_main-default text_color_inactive`}>Калории,ккал</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{ingredient.calories}</p>
                </li>
                <li className={stylesIngredientDetails.listItem}>
                    <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{ingredient.proteins}</p>
                </li>
                <li className={stylesIngredientDetails.listItem}>
                    <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{ingredient.fat}</p>
                </li>
                <li className={stylesIngredientDetails.listItem}>
                    <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{ingredient.carbohydrates}</p>
                </li>
            </ul>
        </section>
    )
};



export default IngredientDetails