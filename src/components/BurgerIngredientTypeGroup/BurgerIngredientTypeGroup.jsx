import React from 'react';
import stylesBurgerIngredientTypeGroup from '../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup.module.css'
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'

const BurgerIngredientTypeGroup = (props) => {
    return (
        <section className={`${stylesBurgerIngredientTypeGroup.container} `}>
            <p className={`${stylesBurgerIngredientTypeGroup.title} text text_type_main-medium m-2`}>{props.title}</p>
            <ul className={stylesBurgerIngredientTypeGroup.list}>
                {props.ingrArrayData.map((item, index) => {
                    if(item.type === props.listType) {
                        return <BurgerIngredient key={index} ingredient={item}/>
                    }
                })}
            </ul>
        </section>
    )
}

export default BurgerIngredientTypeGroup