/**
 * компонент
 */

import React from 'react';
import stylesBurgerIngredientTypeGroup from '../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup.module.css'
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'
import PropTypes from "prop-types";

const BurgerIngredientTypeGroup = (props) => {

    return (
        <section className={`${stylesBurgerIngredientTypeGroup.container} `}>
            <p className={`${stylesBurgerIngredientTypeGroup.title} text text_type_main-medium m-2`}>{props.title}</p>
            <ul className={`${stylesBurgerIngredientTypeGroup.list} pl-5 pr-5`}>
                {props.data.map((item) => {
                    if(item.type === props.listType) {
                        return <BurgerIngredient openModal={(e) => {
                            props.openModal(e);
                            props.selectElement(item);
                        }
                        } key={item._id} data={item}/>
                    }
                })}
            </ul>
        </section>
    )
};

BurgerIngredientTypeGroup.propTypes = {
    title: PropTypes.string.isRequired,
    listType: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    })),
    openModal: PropTypes.func.isRequired,
    selectElement: PropTypes.func.isRequired
}

export default BurgerIngredientTypeGroup