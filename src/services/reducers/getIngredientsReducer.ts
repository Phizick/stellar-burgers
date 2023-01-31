import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SET_INGREDIENTS_MODAL,
    DELETE_INGREDIENTS_MODAL, CHOICE_INGREDIENT
} from "../actions/actionsTypes/ingredientsTypes";
import {TIngredient} from "../types/types";

const initialState = {
    data: null,
    ingredientsProcessing: false,
    isLoad: false,
    modalData: null
};

type TIngredientState = {
    data: TIngredient[] | null,
    ingredientsProcessing?: boolean,
    isLoad?: boolean,
    modalData?: TIngredient | null,
}

interface IGetIngredients {
    readonly type: typeof GET_INGREDIENTS
}

interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS
    data: TIngredient[],
}

interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED

}

interface ISetIngredientsModal {
    readonly type: typeof SET_INGREDIENTS_MODAL
    payload: TIngredient,
}

interface IChoiceIngredient {
    readonly type: typeof CHOICE_INGREDIENT
    data: any
}
interface IDeleteIngredientsModal {
    readonly type: typeof DELETE_INGREDIENTS_MODAL
    payload: {
        modalData: any
    }
}

export type TIngredientsActions =
    | IGetIngredients
    | IGetIngredientsSuccess
    | IGetIngredientsFailed
    | ISetIngredientsModal
    | IDeleteIngredientsModal
    | IChoiceIngredient


export const getIngredientsReducer = (state: TIngredientState = initialState, action: TIngredientsActions): TIngredientState => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredientsProcessing: true,
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsProcessing: false,
                data: action.data,
                isLoad: true
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsProcessing: false,
                data: state.data,
            };
        }
        case SET_INGREDIENTS_MODAL: {
            return {
                ...state,
                modalData: action.payload
            }
        }
        case DELETE_INGREDIENTS_MODAL: {
            return {
                ...state,
                modalData: initialState.modalData
            }
        }
        default:
            return state;
    }
};
