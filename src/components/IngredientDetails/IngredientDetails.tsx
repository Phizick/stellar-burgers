/**
 * компонент информации об ингредиенте для отображения в модальном окне
 * @component
 * @returns
 * разметку информации об ингредиенте
 */

import React, { useEffect, FC } from "react";
import stylesIngredientDetails from "../IngredientDetails/IngredientDetails.module.css";
import {useAppDispatch, useAppSelector} from "../../services/hooks/hooks";
import {getIngredientDetails} from "../../services/actions/ingredients";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { getIngredients} from "../../services/selectors/ingredientsSelectors";
import {getIngredient} from "../../services/selectors/ingredientDetailsSelectors";
import {TIngredient} from "../../services/types/types";

const IngredientDetails: FC = () => {
    const ingredient = useAppSelector(getIngredient);
    const ingredients = useAppSelector(getIngredients);
    const { isLoad } = useAppSelector((state) => state.ingredients);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const findItem = ingredients?.find((i: TIngredient) => i._id === id);
        findItem !== undefined && dispatch(getIngredientDetails(findItem));
    }, [dispatch, id, ingredients]);

    return (
        <>
            {isLoad ? (
                <section className={stylesIngredientDetails.container}>
                    <img src={ingredient?.image_large} alt={ingredient?.name} className={stylesIngredientDetails.img} />
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
            ) : (
                <div className={stylesIngredientDetails.loader}>
                    <InfinitySpin width="200" color="#4c4cff" />
                </div>
            )}
        </>
    );
};



export default IngredientDetails;
