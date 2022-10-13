/**
 * компонент группы ингредиентов
 * @component
 * @returns
 * разметку списка ингредиентов, сортированных по типу
 */

import React from 'react';
import stylesBurgerIngredientTypeGroup from '../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup.module.css'
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'
// import PropTypes from "prop-types";
// import {ingredientType} from "../../utils/type";
import {useSelector} from "react-redux";

const BurgerIngredientTypeGroup = (props) => {
    const burgerIngredients = useSelector(store => store.ingredients.data)
    console.log(burgerIngredients)
    return (
        <section className={`${stylesBurgerIngredientTypeGroup.container} `} id={props.ID}>
            <p className={`text text_type_main-medium m-2`}>{props.title}</p>
            <ul className={`${stylesBurgerIngredientTypeGroup.list} pl-4 pr-5`}>
                {burgerIngredients.length > 0 && burgerIngredients
                    .filter(item => {
                        return item.type === props.listType
                    })
                    .map((item) => {
                        let counter = 0
                        burgerIngredients.forEach(constItem => {
                            if (constItem === item) {
                                return counter++
                            }
                        })

                        return (
                            <BurgerIngredient activeModal={props.activeModal} key={item._id} data={item} counter={counter}/>
                        );

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