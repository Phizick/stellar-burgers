import {request} from "./index";
import {Dispatch} from 'react'



export const getIngredients = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: GET_INGREDIENTS,
        });
        request(`ingredients`, {})
            .then((res: any) => {
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

export const getIngredientDetails = (ingredient: any) => {
    return {
        type: CHOICE_INGREDIENT,
        data: ingredient,
    };
};
