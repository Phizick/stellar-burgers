import React from 'react'
import stylesIngredientDetails from '../IngredientDetails/IngredientDetails.module.css'
import PropTypes from "prop-types";

const IngredientDetails = (props) => {


    return (
        <section className={stylesIngredientDetails.container}>
            <img src={props.selectedElement.image_large} alt={props.selectedElement.name}/>
            <p className={`${stylesIngredientDetails.title} text text_type_main-medium pt-4 pb-8`}>{props.selectedElement.name}</p>
            <div className={`${stylesIngredientDetails.ingredientDetails}`}>
                <div className={''}>
                    <p className={`text text_type_main-default text_color_inactive`}>Калории,ккал</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{props.selectedElement.calories}</p>
                </div>
                <div className={''}>
                    <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{props.selectedElement.proteins}</p>
                </div>
                <div className={''}>
                    <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{props.selectedElement.fat}</p>
                </div>
                <div className={''}>
                    <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
                    <p className={`text text_type_digits-default text_color_inactive pt-3`}>{props.selectedElement.carbohydrates}</p>
                </div>
            </div>
        </section>
    )
};

 IngredientDetails.propTypes = {
     selectedElement: PropTypes.shape({
         image_large: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         calories: PropTypes.number.isRequired,
         proteins: PropTypes.number.isRequired,
         fat: PropTypes.number.isRequired,
         carbohydrates: PropTypes.number.isRequired
     })
 }

export default IngredientDetails