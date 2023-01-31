import {request} from "./api";

import { GET_INGREDIENTS,
GET_INGREDIENTS_SUCCESS,
GET_INGREDIENTS_FAILED,
CHOICE_INGREDIENT} from "./actionsTypes/ingredientsTypes";
import {AppDispatch, TIngredient} from "../types/types";


export const getIngredients = () => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: GET_INGREDIENTS,
        });
        request(`ingredients`, {})
            .then((res) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    data: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                    error: err.message,
                });
            });
    };
};

export const getIngredientDetails = (ingredient: TIngredient) => {
    return {
        type: CHOICE_INGREDIENT,
        data: ingredient,
    };
};
