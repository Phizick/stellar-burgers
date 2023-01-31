import { ADD_CONSTRUCTOR_BUN,
ADD_CONSTRUCTOR_INGREDIENT,
SORTED_CONSTRUCTOR,
DELETE_CONSTRUCTOR_INGREDIENT,
} from "../actions/actionsTypes/constructorTypes";
import { CLEAR_CONSTRUCTOR} from "../actions/actionsTypes/orderTypes";
import {TIngredient} from "../types/types";

type TInitialState = {
    ingredients: TIngredient[];
    bun: TIngredient | null;
    ingredientsAdded: string[];
}

const initialState = {
    ingredients: [],
    bun: null,
    ingredientsAdded: []
};

interface IAddConstructorIngredient {
    readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT
    data: TIngredient,
    keyId: string,
}

interface IAddConstructorBun {
    readonly type: typeof ADD_CONSTRUCTOR_BUN
    data: object,
}

interface ISortedConstructor {
    readonly type: typeof SORTED_CONSTRUCTOR
    data: any
}

interface IDeleteConstructorIngredient {
    readonly type: typeof DELETE_CONSTRUCTOR_INGREDIENT
    id: string | undefined,
}

export type TConstructorActions =
    | IAddConstructorIngredient
    | IAddConstructorBun
    | ISortedConstructor
    | IDeleteConstructorIngredient

export const burgerConstructorReducer = (state: TInitialState = initialState, action: any): TInitialState => {
    switch (action.type) {
        case ADD_CONSTRUCTOR_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, { ...action.data, keyId: action.keyId }],
                ingredientsAdded: [...state.ingredientsAdded, action.data._id]
            };
        case ADD_CONSTRUCTOR_BUN:
            return {
                ...state,
                bun: action.data,
                ingredientsAdded: [...state.ingredientsAdded, action.data._id]
            };
        case SORTED_CONSTRUCTOR: {
            return {
                ...state,
                ingredients: action.data,
            };
        }
        case DELETE_CONSTRUCTOR_INGREDIENT:
            const newIngredientsState = { ...state };
            const indexIngredient = newIngredientsState.ingredients.findIndex((item: any) => item.key === action.data);
            if (indexIngredient !== -1) {
                newIngredientsState.ingredients.splice(indexIngredient, 1);
            }
            return {
                ...state,
                ingredients: [...newIngredientsState.ingredients],
            };
        case CLEAR_CONSTRUCTOR:
            return {
                ...state,
                ingredients: action.data,
                bun: null,
                ingredientsAdded: []
            }
        default: {
            return state;
        }
    }
};
