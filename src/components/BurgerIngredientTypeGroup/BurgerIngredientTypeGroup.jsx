/**
 * компонент группы ингредиентов
 * @component
 * @returns
 * разметку списка ингредиентов, сортированных по типу
 */

import React, { forwardRef } from "react";
import stylesBurgerIngredientTypeGroup from "../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {Link, useLocation} from "react-router-dom";

const BurgerIngredientTypeGroup = forwardRef((props, ref) => {
    const burgerIngredients = useSelector((store) => store.ingredients.data);
    const location = useLocation()
    return (
        <section className={`${stylesBurgerIngredientTypeGroup.container} `} ref={ref} id={props.id}>
            <p className={`text text_type_main-medium m-2`}>{props.title}</p>
            <ul className={`${stylesBurgerIngredientTypeGroup.list} pl-4 pr-5`}>
                {burgerIngredients.length > 0 &&
                    burgerIngredients
                        .filter((item) => {
                            return item.type === props.listType;
                        })
                        .map((item) => {
                            return (
                            <Link to={{pathname: `/ingredients/${item._id}`, state:{background: location}}} key={item._id}>
                                <BurgerIngredient activeModal={props.activeModal} key={item._id} data={item} />;
                            </Link>
                            )
                        })}
            </ul>
        </section>
    );
});

BurgerIngredientTypeGroup.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    listType: PropTypes.string.isRequired,
    activeModal: PropTypes.func.isRequired,
};

export default BurgerIngredientTypeGroup;
