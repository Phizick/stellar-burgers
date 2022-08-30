import React from 'react';
import stylesBurgerIngredientTypeGroup from '../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup.module.css'
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'

const BurgerIngredientTypeGroup = (props) => {
    console.log(props)
    return (
        <section className={`${stylesBurgerIngredientTypeGroup.container} `}>
            <p className={`${stylesBurgerIngredientTypeGroup.title} text text_type_main-medium m-2`}>{props.title}</p>
            <ul className={stylesBurgerIngredientTypeGroup.list}>
                {props.data.map((item, index) => {
                    if(item.type === props.listType) {
                        return <BurgerIngredient openModal={(e) => {
                            props.handleOpenState(e);
                            props.setSelectedElement(item)
                        }
                        } key={index} data={item}/>
                    }
                })}
            </ul>
        </section>
    )
}

export default BurgerIngredientTypeGroup