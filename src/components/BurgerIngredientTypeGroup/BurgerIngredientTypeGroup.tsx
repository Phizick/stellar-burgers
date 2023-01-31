/**
 * компонент группы ингредиентов
 * @component
 * @returns
 * разметку списка ингредиентов, сортированных по типу
 */

import React, {forwardRef} from "react";
import stylesBurgerIngredientTypeGroup from "../BurgerIngredientTypeGroup/BurgerIngredientTypeGroup.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import {useAppSelector} from "../../services/hooks/hooks";
import {Link, useLocation} from "react-router-dom";
import {getIngredients} from "../../services/selectors/ingredientsSelectors";
import {TIngredient} from "../../services/types/types";
import {useSelector} from "react-redux";


type TIngredientTypeGroup = {
    ingredients?: TIngredient[];
    type?: string;
    props?: any;
    id: string;
    title: string;
    listType: string;
    activeModal: any
}

const BurgerIngredientTypeGroup = forwardRef<HTMLElement, TIngredientTypeGroup>((props, ref) => {
    const burgerIngredients = useAppSelector(getIngredients);

    const location = useLocation()
    return (
        <section className={`${stylesBurgerIngredientTypeGroup.container} `} ref={ref} id={props.id}>
            <p className={`text text_type_main-medium m-2`}>{props.title}</p>
            <ul className={`${stylesBurgerIngredientTypeGroup.list} pl-4 pr-5`}>
                {burgerIngredients !== null && burgerIngredients?.length > 0 &&
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
