import {request} from "./index";
import {Dispatch} from 'react'

export const GET_INGREDIENTS: 'GET_INGREDIENTS' = "GET_INGREDIENTS";
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = "GET_INGREDIENTS_FAILED";
export const CHOICE_INGREDIENT: 'CHOICE_INGREDIENT' = "CHOICE_INGREDIENT";
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = "DELETE_INGREDIENT";
export const SET_INGREDIENTS_MODAL: 'SET_INGREDIENTS_MODAL' = 'SET_INGREDIENTS_MODAL';
export const DELETE_INGREDIENTS_MODAL: 'DELETE_INGREDIENTS_MODAL' = 'DELETE_INGREDIENTS_MODAL';

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
