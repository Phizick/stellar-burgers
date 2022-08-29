import React from 'react';
import stylesBurgerIngredientTypeGroup from '../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup.module.css'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'

const BurgerIngredientTypeGroup = (props) => {
    return (
        <section className={stylesBurgerIngredientTypeGroup.container}>
            <p className={stylesBurgerIngredientTypeGroup.title}>{props.title}</p>
            <ul className={stylesBurgerIngredientTypeGroup.list}>
                {props.ingrArrayData.map((item, index) => {
                    if(item.type === props.listType) {
                        return <BurgerIngredient key={index}/>
                    }
                })}
            </ul>
        </section>
    )
}

export default BurgerIngredientTypeGroup