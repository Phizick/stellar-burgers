/**
 * компонент группы ингредиентов
 * @component
 * @returns
 * разметку списка ингредиентов, сортированных по типу
 */

import React from 'react';
import stylesBurgerIngredientTypeGroup from '../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup.module.css'
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'
import PropTypes from "prop-types";
import {ingredientType} from "../../utils/type";

const BurgerIngredientTypeGroup = (props) => {
    return (
        <section className={`${stylesBurgerIngredientTypeGroup.container} `}>
            <p className={`text text_type_main-medium m-2`}>{props.title}</p>
            <ul className={`${stylesBurgerIngredientTypeGroup.list} pl-4 pr-5`}>
                {props.data.map((item) => {
                    if(item.type === props.listType) {
                        return (
                            <BurgerIngredient openModal={props.openModal} key={item._id} data={item}/>
                        );
                    }
                })}
            </ul>
        </section>
    )
};

// BurgerIngredientTypeGroup.propTypes = {
//     title: PropTypes.string.isRequired,
//     listType: PropTypes.string.isRequired,
//     data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
//     openModal: PropTypes.func.isRequired
// };

export default BurgerIngredientTypeGroup