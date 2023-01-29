import {request} from "./index";
import { TIngredient } from "../types/types";
import { GET_INGREDIENTS,
GET_INGREDIENTS_SUCCESS,
GET_INGREDIENTS_FAILED,
CHOICE_INGREDIENT} from "./actionsTypes/ingredientsTypes";
import { AppDispatch, AppThunk} from "../types/types";

interface IGetIngredients {
    readonly type: typeof GET_INGREDIENTS
}
interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS
}

interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED
}

interface IChoiceIngredients {
    readonly type: typeof CHOICE_INGREDIENT
}

export type TIngredientsActions =
    | IGetIngredients
    | IGetIngredientsSuccess
    | IGetIngredientsFailed
    | IChoiceIngredients;


export const getIngredients: AppThunk = () => {
    return (dispatch: AppDispatch) => {
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

export const getIngredientDetails = (ingredient: TIngredient) => {
    return {
        type: CHOICE_INGREDIENT,
        data: ingredient,
    };
};
