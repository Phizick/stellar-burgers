/**
 * компонент группы ингредиентов
 * @component
 * @returns
 * разметку списка ингредиентов, сортированных по типу
 */

import React, {forwardRef} from "react";
import stylesBurgerIngredientTypeGroup from "../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import { useSelector } from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {getIngredients} from "../../utils/constants";
import {TIngredient} from "../../services/types/types";


type TRef = HTMLElement

type TIngredientTypeGroup = {
    ingredients?: TIngredient[];
    type?: string;
    props?: any;
    id: string;
    title: string;
    listType: string;
    activeModal: any
}

const BurgerIngredientTypeGroup = forwardRef<TRef, TIngredientTypeGroup>((props, ref) => {
    const burgerIngredients = useSelector(getIngredients);
    const location = useLocation()
    return (
        <section className={`${stylesBurgerIngredientTypeGroup.container} `} ref={ref} id={props.id}>
            <p className={`text text_type_main-medium m-2`}>{props.title}</p>
            <ul className={`${stylesBurgerIngredientTypeGroup.list} pl-4 pr-5`}>
                {burgerIngredients.length > 0 &&
                    burgerIngredients
                        .filter((item: any) => {
                            return item.type === props.listType;
                        })
                        .map((item: any) => {
                            return (
                            <Link className={stylesBurgerIngredientTypeGroup.link} to={{pathname: `/ingredients/${item._id}`, state:{background: location}}} key={item._id}>
                                <BurgerIngredient activeModal={props.activeModal} key={item._id} data={item} />
                            </Link>
                            )
                        })}
            </ul>
        </section>
    );
});


export default BurgerIngredientTypeGroup;
