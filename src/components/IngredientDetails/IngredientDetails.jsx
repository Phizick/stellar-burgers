/**
 * компонент информации об ингредиенте для отображения в модальном окне
 * @component
 * @returns
 * разметку информации об ингредиенте
 */

import React, {useEffect} from "react";
import stylesIngredientDetails from "../IngredientDetails/IngredientDetails.module.css";
import {useDispatch, useSelector} from "react-redux";

import {getIngredientDetails} from "../../services/actions";
import {useParams} from "react-router-dom";

const IngredientDetails = ({active}) => {
    const ingredient = useSelector((state) => state.ingredientDetail.selectedIngredient);
    const ingredients = useSelector((state) => state.ingredients.data)
    const { isLoad } = useSelector((state) => state.ingredients)
    const dispatch = useDispatch();
    const { id } = useParams()



    useEffect(() => {
             const findItem = ingredients.find((i) => i._id === id);
        // const findItem = ingredients.find((i) => i._id === '60d3b41abdacab0026a733c7')
        console.log(findItem)

            dispatch(getIngredientDetails(findItem))


    }, [dispatch,  id, ingredients])


    return (
        <>
        {
            isLoad ? (
                <section className={stylesIngredientDetails.container}>
                    {active && <h1 className={stylesIngredientDetails.head}>Детали ингредиента</h1>}
                    <img src={ingredient?.image_large} alt={ingredient?.name} className={stylesIngredientDetails.img}/>
                    <p className={`${stylesIngredientDetails.title} text text_type_main-medium pt-4 pb-8`}>{ingredient?.name}</p>
                    <ul className={`${stylesIngredientDetails.ingredientDetails}`}>
                        <li className={stylesIngredientDetails.listItem}>
                            <p className={`text text_type_main-default text_color_inactive`}>Калории,ккал</p>
                            <p className={`text text_type_digits-default text_color_inactive pt-3`}>{ingredient?.calories}</p>
                        </li>
                        <li className={stylesIngredientDetails.listItem}>
                            <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
                            <p className={`text text_type_digits-default text_color_inactive pt-3`}>{ingredient?.proteins}</p>
                        </li>
                        <li className={stylesIngredientDetails.listItem}>
                            <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
                            <p className={`text text_type_digits-default text_color_inactive pt-3`}>{ingredient?.fat}</p>
                        </li>
                        <li className={stylesIngredientDetails.listItem}>
                            <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
                            <p className={`text text_type_digits-default text_color_inactive pt-3`}>{ingredient?.carbohydrates}</p>
                        </li>
                    </ul>
                </section>
            ) : ( 'load' )


        }
        </>
    )
};

export default IngredientDetails;
