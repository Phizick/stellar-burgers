import { ADD_CONSTRUCTOR_BUN,
ADD_CONSTRUCTOR_INGREDIENT,
SORTED_CONSTRUCTOR,
DELETE_CONSTRUCTOR_INGREDIENT,
} from "../actions/actionsTypes/constructorTypes";
import { CLEAR_CONSTRUCTOR} from "../actions/actionsTypes/orderTypes";
import {TIngredient} from "../types";

type TInitialState = {
    ingredients: TIngredient[];
    bun: TIngredient;
    ingredientsAdded: string[];
}

const initialState: TInitialState = {
    ingredients: [],
    bun: {
        calories: 0,
        carbohydrates: 0,
        fat: 0,
        image: '',
        image_large: '',
        image_mobile: '',
        name: '',
        price: 0,
        proteins: 0,
        type: "bun",
        __v: 0,
        _id: '',
        id: '',
        count: 0,
    },
    ingredientsAdded: []
};

export const burgerConstructorReducer = (state = initialState, action: any) => {
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
