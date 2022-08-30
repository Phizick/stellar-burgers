import React from 'react'
import stylesIngredientDetails from '../IngredientDetails/IngredientDetails.module.css'

const IngredientDetails = (props) => {
    console.log(props.selectedElement)
    return (
        <section className={stylesIngredientDetails}>
            <h3 className={''}>Детали ингредиента</h3>
            <img src={props.selectedElement.image_large} alt={props.selectedElement.name}/>
            <p className={''}>{props.selectedElement.name}</p>
            <div className={''}>
                <div className={''}>
                    <p className={''}>Калории,ккал</p>
                    <p className={''}>{props.selectedElement.calories}</p>
                </div>
                <div className={''}>
                    <p className={''}>Белки, г</p>
                    <p className={''}>{props.selectedElement.proteins}</p>
                </div>
                <div className={''}>
                    <p className={''}>Жиры, г</p>
                    <p className={''}>{props.selectedElement.fat}</p>
                </div>
                <div className={''}>
                    <p className={''}>Углеводы, г</p>
                    <p className={''}>{props.selectedElement.carbohydrates}</p>
                </div>

            </div>

        </section>
    )
}

export default IngredientDetails