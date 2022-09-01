/**
 * компонент информации об ингредиенте для отображения в модальном окне
 * @component
 * @returns
 * разметку информации об ингредиенте
 */


import React from 'react'
import stylesIngredientDetails from '../IngredientDetails/IngredientDetails.module.css'
import PropTypes from "prop-types";

const IngredientDetails = (props) => {
    return (
        <section className={stylesIngredientDetails.container}>
            <img src={props.selectedElement.image_large} alt={props.selectedElement.name}/>
            <p className={`${stylesIngredientDetails.title} text text_type_main-medium pt-4 pb-8`}>{props.selectedElement.name}</p>
            <ul className={`${stylesIngredientDetails.ingredientDetails}`}>
                <li className={stylesIngredientDetails.listItem}>
                    <p className={`text text_type_main-default text_color_inactive`}>Калории,ккал</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{props.selectedElement.calories}</p>
                </li>
                <li className={stylesIngredientDetails.listItem}>
                    <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{props.selectedElement.proteins}</p>
                </li>
                <li className={stylesIngredientDetails.listItem}>
                    <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{props.selectedElement.fat}</p>
                </li>
                <li className={stylesIngredientDetails.listItem}>
                    <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{props.selectedElement.carbohydrates}</p>
                </li>
            </ul>
        </section>
    )
};

 // IngredientDetails.propTypes = {
 //     selectedElement: PropTypes.shape({
 //         calories: PropTypes.number.isRequired,
 //         carbohydrates: PropTypes.number.isRequired,
 //         fat: PropTypes.number.isRequired,
 //         image: PropTypes.string.isRequired,
 //         image_large: PropTypes.string.isRequired,
 //         image_mobile: PropTypes.string.isRequired,
 //         name: PropTypes.string.isRequired,
 //         price: PropTypes.number.isRequired,
 //         proteins: PropTypes.number.isRequired,
 //         type: PropTypes.string.isRequired,
 //         __v: PropTypes.number.isRequired,
 //         _id: PropTypes.string.isRequired
 //     })


export default IngredientDetails